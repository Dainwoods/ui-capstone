require('dotenv').config()

const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db');
const mysql = require('mysql');
const crypto = require ('crypto');


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Server started on port '+ app.get('port'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', express.static('../build'))

app.get('http://localhost:3000/', (req, res) => {
  console.log('home: ', req.params)
  connection.query(`CREATE TABLE IF NOT EXISTS Users ( UserId serial PRIMARY KEY,
        Username varchar(60) UNIQUE NOT NULL,
        Salt varchar(32) NOT NULL,
        Password varchar(64) NOT NULL
      );`);

  connection.query(`CREATE TABLE IF NOT EXISTS UserFavorites (
        Username varchar(60) REFERENCES Users(Username),
        MovieId int NOT NULL
      );`);
    });
const getUser = (req, res) => {
  password = crypto.createHash('sha256').update(req.body.passwordOLD).digest('hex')
  return connection.query(
      "SELECT * FROM Users WHERE Username = ? AND Password = ? ;", [req.body.usernameOLD, password],
      function(error, rows) {
        if (error) throw error;
        console.log('rows found:  '  , rows);
        res.send({rows: rows, tst: "betterTest"});
      }
    )
  }

const addUser = (req, res) => {
  const salt = crypto.randomBytes(32 / 2).toString('hex');
  const hashedPassword = crypto.createHash('sha256').update(req.body.passwordNEW).digest('hex');
  console.log('hasehd:  ', hashedPassword);
  return connection.query (
  "INSERT INTO Users(Username, Salt, Password) VALUES(?, ?, ?);", [req.body.usernameNEW, salt, hashedPassword],
  function(err, rows) {
    if (err) throw err;
    console.log('rowss inserted: ', rows);
    res.send({rows: rows, signUpTest: 'test'});
  }
)}

app.post('/login', (req, res, next) => {
  console.log('back end post data: ', req.body);
  getUser(req, res);
});

app.post('/signup', (req, res, next) =>  {
  console.log('sign up backend post data: ', req.body);
  addUser(req, res);
});


app.get('/status', (req, res) => res.send('Working!'));