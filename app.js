const express = require('express');
const app = exxpress();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log('Running your bastard app'));