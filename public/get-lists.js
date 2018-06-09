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
});