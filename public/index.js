"use strict";
let getListItems = () => {
  let url = "/getItems";
  return fetch(url)
  .then(response => {
    console.log(response);
    response.json().then( (data) => {
        let ul = document.querySelector("#items");
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement('article');
            li.innerText = data[i].item;
            li.className = "item";
            ul.appendChild(li);
        }
    });
  })
  .catch(error => {
    console.log(error);
  });
};

getListItems();