const express = require('express');
const hostname = '127.0.0.1';
const port = '4000';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.get('/request', (req, res) => {
    // query database for requests
    res.status(200).send(`get request success`);
});

app.delete('/request', (req, res) => {
    // delete specified request from database
    res.status(200).send(`DELETE request success`);
});

app.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}`);
});