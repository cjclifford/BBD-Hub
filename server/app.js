const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = '4000';

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const config = {
    user: 'sa',
    password: 'Password_',
    server: 'localhost',
    database: 'BBD_Hub'
}
try {
    sql.connect(config, (error) => {
        if (error) console.log(error);
        else console.log('success');
    });
} catch (error) {
    throw error;
}

app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

<<<<<<< HEAD
// CRUD operations for Requests
app.get('/request', (req, res) => {
=======
app.get('/getRequests', async (req, res) => {
>>>>>>> d7ee443ac7c8452c02b2f251de371fafc3f49071
    request = new sql.Request();
    request.query('SELECT * FROM Requests', (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

<<<<<<< HEAD
app.get('/request/:id', (req, res) => {
=======
app.get('/getSpecificRequest/:id', async (req, res) => {
>>>>>>> d7ee443ac7c8452c02b2f251de371fafc3f49071
    request = new sql.Request();
    request.query(`SELECT * FROM Requests WHERE RequestID = ${req.params.id}`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

<<<<<<< HEAD
app.delete('/request/:id', (req, res) => {
=======
app.delete('/deleteSpecificRequest/:id', async (req, res) => {
>>>>>>> d7ee443ac7c8452c02b2f251de371fafc3f49071
    request = new sql.Request();
    request.query(`DELETE FROM Requests WHERE RequestID = ${req.params.id}`);
    res.status(200).send(`DELETE request success`);
});

<<<<<<< HEAD
app.post('/request', (req, res) => {
    // TODO: save images from body
=======
app.post('/addRequest', async (req, res) => {
>>>>>>> d7ee443ac7c8452c02b2f251de371fafc3f49071
    request = new sql.Request();
    request.query(`INSERT INTO Requests(RoomID, FlagID, Status, Description) VALUES (${req.body.roomId}, ${req.body.flagId}, 0, ${req.body.description})`,
    (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
})

// CRUD operations for Maintainers
app.get('/maintainers', (req, res) => {
    request = new sql.Request();
    request.query(`SELECT * FROM Maintainers`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.get('/maintainers/:id', (req, res) => {
    request = new sql.Request();
    request.query(`SELECT * FROM Maintainers WHERE MaintainerID = ${req.params.id}`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.delete('/maintainers/:id', (req, res) => {
    request = new sql.Request();
    request.query(`DELETE FROM Maintainers WHERE MaintainerID = ${req.params.id}`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.post('/maintainers', (req, res) => {
    request = new sql.Request();
    request.query(`INSERT INTO Maintainers(Name, Surname) VALUES (${req.body.name}, ${req.body.surname})`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}`);
});