const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const authRoutes = require('./route/route');
const path = require('path');
var publicDir = path.join(__dirname,'/');

const hostname = '127.0.0.1';
const port = '4000';

const app = express();

//remove later
app.set('view engine', 'ejs');
app.use('/route', authRoutes);
app.use(express.static(publicDir));
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


app.get('/', (req, res) => {
    sql.connect(config, (error) => {
        if (error) console.log(error);
        else console.log('success');
    });
    res.render('index', {
      user: req.user
  });
});

app.get('/getRequests', async (req, res) => {
    request = new sql.Request();
    request.query('SELECT * FROM Requests', (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.get('/getSpecificRequest/:id', async (req, res) => {
    request = new sql.Request();
    request.query(`SELECT * FROM Requests WHERE RequestID = ${req.params.id}`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.delete('/deleteSpecificRequest/:id', async (req, res) => {
    request = new sql.Request();
    request.query(`DELETE FROM Requests WHERE RequestID = ${req.params.id}`);
    res.status(200).send(`DELETE request success`);
});

app.post('/addRequest', async (req, res) => {
    request = new sql.Request();
    request.query(`INSERT INTO Requests(RoomID, FlagID, Status, Description) VALUES (${req.body.roomId}, ${req.body.flagId}, 0, ${req.body.description})`,
    (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
})


// CRUD operations for Maintainers
app.get('/getMaintainers', (req, res) => {
    request = new sql.Request();
    request.query(`SELECT * FROM Maintainers`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.get('/getSpecificMaintainers/:id', (req, res) => {
    request = new sql.Request();
    request.query(`SELECT * FROM Maintainers WHERE MaintainerID = ${req.params.id}`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.delete('/deleteSpecificMaintainers/:id', (req, res) => {
    request = new sql.Request();
    request.query(`DELETE FROM Maintainers WHERE MaintainerID = ${req.params.id}`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.post('/createNewMaintainers', (req, res) => {
    request = new sql.Request();
    request.query(`INSERT INTO Maintainers(Name, Surname) VALUES (${req.body.name}, ${req.body.surname})`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}`);
});