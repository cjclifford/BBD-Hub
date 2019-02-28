const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const authRoutes = require('./route/route');
const path = require('path');
const cors = require('cors');
var publicDir = path.join(__dirname,'/');

const hostname = '127.0.0.1';
const port = '4000';

const app = express();

//remove later

app.use('/route', authRoutes);
app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({
    origin: ['http://localhost:4200'],
    origin: ['http://localhost:4000'],
    credentials: true
}));

app.use(bodyParser.json());

const config = {
<<<<<<< HEAD
    user: 'saa',
    password: 'Password',
    server: 'KHUTJOM\\SQLEXPRESS',
    database: 'BBD_Hub'
=======
    user: 'sa',
    password: 'Password_',
    server: 'localhost',
    database: 'BBD_Hub',
>>>>>>> d687fd821aa53bedf26d9c0e2ae9209b811925fd
}

sql.connect(config, (error) => {
    if (error) console.log(error);
    else console.log('success');
});

app.get('/', (req, res) => {
res.send("connected");
});

app.get('/getRequests', (req, res) => {
    sql.query('SELECT * FROM Requests', (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.get('/getRequestsByRoomId/:id', (req, res) => {
    sql.query(`SELECT * FROM Requests WHERE RoomID = ${req.params.id}`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet.recordset);
    });
});

app.get('/getSpecificRequest/:id', (req, res) => {
    sql.query(`SELECT * FROM Requests WHERE RequestID = ${req.params.id}`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.delete('/deleteSpecificRequest/:id', (req, res) => {
    sql.query(`DELETE FROM Requests WHERE RequestID = ${req.params.id}`);
    res.status(200).send(`DELETE request success`);
});

app.post('/addRequest', (req, res) => {
    sql.query(`INSERT INTO Requests(RoomID, FlagID, Status, Description) VALUES (${req.body.roomId}, ${req.body.flagId}, 0, ${req.body.description})`,
    (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
})


// CRUD operations for Maintainers
app.get('/getMaintainers', (req, res) => {
    sql.query(`SELECT * FROM Maintainers`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.get('/getSpecificMaintainers/:id', (req, res) => {
    sql.query(`SELECT * FROM Maintainers WHERE MaintainerID = ${req.params.id}`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.delete('/deleteSpecificMaintainers/:id', (req, res) => {
    sql.query(`DELETE FROM Maintainers WHERE MaintainerID = ${req.params.id}`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

app.post('/createNewMaintainers', (req, res) => {
    sql.query(`INSERT INTO Maintainers(Name, Surname) VALUES (${req.body.name}, ${req.body.surname})`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet);
    });
});

// CRUD operations for rooms
app.get('/getRooms', async (req, res) => {
    await sql.query(`SELECT * FROM Rooms`, (error, recordSet) => {
        if (error) throw error;
        res.status(200).send(recordSet.recordset);
    });
});

app.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}`);
});