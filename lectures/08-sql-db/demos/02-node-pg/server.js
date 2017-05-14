'use strict'

const pg = require('pg')
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT = process.env.PORT || 3000

// Set up the client connection to the DB
//const connectionString = 'postgres://postgres:db#2700@localhost:5432/simpsons'
const connectionString = 'postgres://postgres:db%232700@localhost:5432/simpsons';
const client = new pg.Client(connectionString)
client.connect()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'))

// Base route for serving up HTML
app.get('/', function(request, response) {
  response.sendFile('./public/index.html')
})

// DB routes for CRUD operations
app.get('/db/person', function(request, response) {
  client.query('SELECT * FROM persons;')
  .then(function(data) {
    response.send(data)
  })
  .catch(function(err) {
    console.error(err)
  })
})

app.post('/db/person', function(request, response) {
  console.log('posting');
  client.query(`
    INSERT INTO persons(name, age, ninja)
    VALUES($1, $2, $3);
    `,
    [
      request.body.name,
      request.body.age,
      request.body.ninja
    ]
  )
  .then(function(data) {
  console.log('posting', data);
    // response.redirect('/')
  })
  .catch(function(err) {
    console.error(err)
  })
})

createTable()

app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`);
})


////// Create database table helper function //////
function createTable() {
  client.query(`
    CREATE TABLE IF NOT EXISTS persons(
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      age INTEGER,
      ninja BOOLEAN
    );`
  )
  .then(function(response) {
    console.log(response)
  })
}
