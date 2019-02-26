const express = require('express');
<<<<<<< HEAD
const sql = require('mssql');

=======
const path = require('path');
var publicDir = path.join(__dirname,'/');
>>>>>>> 06c8d647cd89792755b172ed9ee1a1dbf1fa51da
const hostname = '127.0.0.1';
const port = '4000';

const app = express();
//for testing remove later
app.set('view engine', 'ejs');
app.use(express.static(publicDir));


//TEST remove when done
app.get('/', (req, res) => {
  res.render('home', {
      user: req.user
  });
});

app.get('/', async (req, res) => {
    sql.connect(config, (error) => {
        if (error) console.log(error);
    });
    res.status(200).send('hello world');
});

<<<<<<< HEAD
app.get('/request', async (req, res) => {
=======
app.get('/request', function (req, res) {
>>>>>>> 06c8d647cd89792755b172ed9ee1a1dbf1fa51da
    // query database for requests
    res.send("get request success");
});

<<<<<<< HEAD
app.delete('/request', async (req, res) => {
=======
app.post("/request", function (req, res) {
  console.log(req);
  res.send("gotit");
});

app.post('/DeleteRequest', (req, res) => {
>>>>>>> 06c8d647cd89792755b172ed9ee1a1dbf1fa51da
    // delete specified request from database
    res.send(`DELETE request success`);

});

app.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}`);

});