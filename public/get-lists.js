"use strict";
let getLists = () => {
  let url = "/getLists";
  return fetch(url)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .catch(error => {
    console.log(error);
  });
};

getLists().then( data => {
    console.log("HERE");
    console.log(data);
    var sl = document.createElement('select');
    sl.name = "list";
    sl.id = "list";
    data.forEach( lst => {
        var opt = document.createElement('option');
        opt.value = lst;
        opt.innerText = lst;
        sl.appendChild(opt);
    });
    var listElem = document.querySelector("#list");
    listElem.replaceWith(sl);
});