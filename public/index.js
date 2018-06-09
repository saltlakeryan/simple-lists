"use strict";
let getListItems = () => {
  let url = "/getItems";
  return fetch(url)
  .then(response => {
    console.log(response);
    response.json().then( (data) => {
        let ul = document.querySelector("ul#items");
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement('li');
            li.innerText = data[i].item;
            ul.appendChild(li);
        }
    });
  })
  .catch(error => {
    console.log(error);
  });
};

getListItems();