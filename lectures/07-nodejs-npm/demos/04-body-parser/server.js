'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('./public'));

app.get('/', function(request, response) {
  response.sendFile('./public/index.html');
});

// app.post('/login', urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   res.send('welcome, ' + req.body.username)
// })

app.post('/login', urlencodedParser, function (request, response) {
  console.log('username', request.body.username);
  console.log('password', request.body.password);
  if (request.body.username === 'foo' && request.body.password === 'secret'){
    response.sendFile('dashboard.html', { root: './secret' });
  } else {
    response.send('Incorrect username/password.');
  }
});

app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`);
});
