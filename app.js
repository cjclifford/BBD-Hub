const express = require('express');
const path = require('path');
var publicDir = path.join(__dirname,'../');
const hostname = '127.0.0.1';
const port = '4000';

const app = express();
//for testing remove later
app.set('view engine', 'ejs');
app.use(express.static(publicDir));

app.get('/', (req, res) => {
  res.render('home', {
      user: req.user
  });
});n

app.get('/request', function (res, req) {
    // query database for requests
    res.send('get request success');
});

app.post("/request", function (req, res) {
  console.log(req);
  res.send("post request success");
});

app.delete('/request', (res, req) => {
    // delete specified request from database
    res.send('DELETE request success');
});

app.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}`);

});