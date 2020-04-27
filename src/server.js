require('dotenv').config()

const express = require('express');
const app = express.Router();
const bodyParser = require('body-parser');
const connection = require('./db');
const mysql = require('mysql');
app.get('/hello', (req, res) => res.send('Hello World!'));
app.set('port', process.env.PORT || 3000);
app.listen(3000);
// connection.connect(function(err) {
//       if (err) {
//         console.error('Error connecting: ' + err.stack);
//         return;
//       }
//       console.log('Connected as thread id: ' + connection.threadId);
//     });
  


// connection.query(`CREATE TABLE IF NOT EXISTS Users ( UserId serial PRIMARY KEY,
//         Username varchar(60) UNIQUE NOT NULL,
//         Salt varchar(32) NOT NULL,
//         Password varchar(64) NOT NULL
//       );`);
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
})
const getLogin = (username, password) => { 
console.log('calleddd:  ');
app.route( 'app/login').get ( (req, res) => {
    connection.query(
      "SELECT * FROM `Users` WHERE Username = ? AND Password = ?", username, password,
      function(error, rows, fields) {
        if (error) throw error;
        res.json(rows);
        console.log(rows[0]);
        res.send(rows);
      }
    );
});
}


app.get('/status', (req, res) => res.send('Working!'));

// // Port 8080 for Google App Engine
// app.set('port', process.env.PORT || 8080);
// app.listen(8080);
//exports.getLogin =  getLogin


