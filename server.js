// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// init sqlite db
var fs = require('fs');
var dbFile = './.data/sqlite.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

function initDb() {
    db.run('CREATE TABLE ListItems (list TEXT, item TEXT)');
    db.run('CREATE TABLE Lists (list TEXT)');
};

// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
db.serialize(function(){
  if (!exists) {
    initDb();
  }
  else {
    db.each('SELECT * from ListItems', function(err, row) {
      if ( row ) {
        console.log('record:', row);
      }
    });
  }
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/add", function (request, response) {
  response.sendFile(__dirname + '/views/add-to-list.html');
});

// endpoint to get all the dreams in the database
// currently this is the only endpoint, ie. adding dreams won't update the database
// read the sqlite3 module docs and try to add your own! https://www.npmjs.com/package/sqlite3
app.get('/getItems', function(request, response) {
  db.all('SELECT item from ListItems', function(err, rows) {
    response.send(JSON.stringify(rows));
  });
});

app.post('/postItems', function(request, response) {
    db.serialize(function() {
      var json = request.body;
      var dream = json.item;
      db.run("INSERT INTO ListItems (item) VALUES  (?)", dream);            
      response.send(JSON.stringify(json));
    });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
