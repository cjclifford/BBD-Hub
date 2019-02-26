const express = require('express');
const path = require('path');
var publicDir = path.join(__dirname,'/');
const hostname = '127.0.0.1';
const port = '4000';

const app = express();
//for testing remove later
app.set('view engine', 'ejs');
app.use(express.static(publicDir));


//TEST remove when done
// app.get('/', (req, res) => {
//   res.render('home', {
//       user: req.user
//   });
// });

app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.get('/request', function (req, res) {
    // query database for requests
    res.send("get request success");
});

app.post("/Request", function (req, res) {
  console.log(req);
  res.send("gotit");
});

app.post('/DeleteRequest', (req, res) => {
    // delete specified request from database
    res.send(`DELETE request success`);

});

app.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}`);

});