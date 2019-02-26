const express = require('express');
const sql = require('mssql');

const hostname = '127.0.0.1';
const port = '4000';

const app = express();

app.get('/', async (req, res) => {
    const config = {
        user: 'sa',
        password: 'Password_',
        server: 'localhost',
        database: 'BBD_Hub'
    }
    sql.connect(config, (error) => {
        if (error) console.log(error);
        else console.log('success');
    });
    res.status(200).send('hello world');
});

app.get('/request', async (req, res) => {
    // query database for requests
    res.status(200).send(`get request success`);
});

app.delete('/request', async (req, res) => {
    // delete specified request from database
    res.status(200).send(`DELETE request success`);
});

app.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}`);
});