const express = require('express');
const hostname = '127.0.0.1';
const port = '4000';

const app = express();

app.get('/', function (req, res) {
    res.send('hello world')
  })

app.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}`);
  });