const express = require('express');
const app = express():
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log('Running your bloody fucking app'));

document.addEventListener('DOMContentLoaded', () => {  
  document.querySelector('button').addEventListener('click', () => {
    alert("this page is working");
  })
})
