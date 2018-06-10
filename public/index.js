"use strict";
let getListItems = () => {
  let url = "/getItems";
  return fetch(url)
  .then(response => {
        return response.json();
    })
  .then( (data) => {
    data = _.groupBy(data, 'list');
    console.log(data);
    let ul = document.querySelector("#items");
    _.each(data, (items, list) => {
        var heading = document.createElement('article');
        heading.className = "item heading";
        heading.innerText = list;
        ul.appendChild(heading);

        for (var i = 0; i < items.length; i++) {
            var li = document.createElement('article');
            li.innerText = items[i].item;
            li.className = "item";
            ul.appendChild(li);
        }
    })
  })
  .catch(error => {
    console.log(error);
  });
};

getListItems();