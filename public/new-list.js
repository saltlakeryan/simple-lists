"use strict";
let form = document.querySelector('form');
let sendNewList = (evt) => {
  let list = document.querySelector('#list').value;
  let data = {list};
  let url = "/addList";
  evt.preventDefault();
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'content-type': 'application/json'
    },    
    body: JSON.stringify(data)
  }).then(data => {
    let ul = document.querySelector("#msg");
    ul.innerHTML = "Added " + list;
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
};
form.addEventListener("submit", sendNewList);