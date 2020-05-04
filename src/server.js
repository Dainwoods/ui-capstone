require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db');
const mysql = require('mysql');

app.use('/login', getLogin);
app.get('/hello', (req, res) => res.send('Hello World!'));
app.set('port', process.env.PORT || 3000);
app.listen(3000);


//const axios = require('axios');
app.get('/hello', (req, res) => res.send('Hello World!'));
app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), function() {
  console.log('Server started on port '+app.get('port'));
});

app.use('/', express.static('../build'))
app.post( '/home', (req, res) => {
 
  connection.query(`CREATE TABLE IF NOT EXISTS Users ( UserId serial PRIMARY KEY,
        Username varchar(60) UNIQUE NOT NULL,
        Salt varchar(32) NOT NULL,
        Password varchar(64) NOT NULL
      );`);

  connection.query(`CREATE TABLE IF NOT EXISTS UserFavorites (
        Username varchar(60) REFERENCES Users(Username),
        MovieId int NOT NULL
      );`);
      res.send('successful');
  
    });

app.get('/home', (req, res) => {
  console.log(req.params);
  
});
app.get('/login', (req, res) => {
  console.log('WHHEEHEHEEH for what');
  console.log(req.params);
  connection.query(
    "SELECT * FROM `Users` WHERE Username = ? AND Password = ?", req.params.username, req.params.password,
    function(error, rows, fields) {
      if (error) throw error;
      res.json(rows);
      console.log(rows[0]);
      res.send(rows);
    }
  );
});
// axios.get('http://dummy.restapiexample.com/api/v1/create', (req, res) => {
//   console.log('gotten   ');
// })
// app.get( 'http://dummy.restapiexample.com/api/v1/create', (req, res) => {
//     console.log('routeddddd ', req);
//     connection.query(
//       "SELECT * FROM `Users` WHERE Username = ? AND Password = ?", username, password,
//       function(error, rows, fields) {
//         if (error) throw error;
//         res.json(rows);
//         console.log(rows[0]);
//         res.send(rows);
//       }
//     );
// });



app.get('/status', (req, res) => res.send('Working!'));



