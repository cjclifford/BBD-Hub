const express = require('express');
const hostname = '127.0.0.1';
const port = '4000';

const app = express();

app.get('/', function (req, res) {
    res.send('hello world')
});

app.get('/request', (res, req) => {
    // query database for requests
    res.statusCode(200).send(`get request success`);
});

app.delete('/request', (res, req) => {
    // delete specified request from database
    res.statusCode(200).send(`DELETE request success`);
});

app.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}`);
});