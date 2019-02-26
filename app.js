const express = require('express');
const path = require('path');
var publicDir = path.join(__dirname,'/');
const hostname = '127.0.0.1';
const port = '4000';

const app = express();

//for testing remove later
app.set('view engine', 'ejs');
app.use(express.static(publicDir));

app.get('/', (req, res) => {
  // res.render('home', {
  //     user: req.user
  // });
});

app.post("/Request", function (req, res) {
  console.log(req);
  res.send("gotit");
});

app.get("/Request", function (req, res) {
  console.log(req);
  res.send("here you go");
});

app.delete("/Request", function (req, res) {
  console.log(req);
  res.send("it is gone");
});

app.listen(port, () => {
  console.log(`Server running at https://${hostname}:${port}`);
});