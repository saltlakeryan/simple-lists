"use strict";
let form = document.querySelector('form');
let sendNewListItem = (evt) => {
  let list = document.querySelector('#list').value;
  let item = document.querySelector('#item').value;
  let data = {list, item};
  let url = "/addItem";
  evt.preventDefault();
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'content-type': 'application/json'
    },    
    body: JSON.stringify(data)
  }).then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
};
form.addEventListener("submit", sendNewListItem);