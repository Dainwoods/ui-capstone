import crypto from 'crypto';
import axios from 'axios';
const express = require('express');
const app = express.Router();
const mysql = require('mysql');
const https = require('https')
let db = mysql.createConnection({
    host: `/cloudsql/ui-capstone:us-central1:ui-capstone`,
    user: 'Diane', //seems wrong
    database: 'movies_and_users',
    password: 'UiCapstonePassword' //replace
  });

db.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as thread id: ' + db.threadId);
});
// console.log('Tried to print');
// const getData = () => {
//   // create a new XMLHttpRequest
//   console.log("calleddd  ||");
//   var xhr = new XMLHttpRequest()

//   // get a callback when the server responds
//   xhr.addEventListener('load', () => {
//     // update the state of the component with the result here
//     console.log("Adfad  :", xhr.responseText)
//   })
//   // open the request with the verb and the url
//   xhr.open('GET', 'https://localhost:3000/login')
//   // send the request
//   xhr.send()
// }
const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
  });
// console.log("datattt  ", router.route("/create-user").get('https://localhost:3000/login').response().data);
// getData();
db.query(`CREATE TABLE IF NOT EXISTS Users (
    UserId serial PRIMARY KEY,
    Username varchar(60) UNIQUE NOT NULL,
    Salt varchar(32) NOT NULL,
    Password varchar(64) NOT NULL,
  );`)
  .then(() => db.query(`CREATE TABLE IF NOT EXISTS UserFavorites (
    Username varchar(60) REFERENCES Users(Username),
    MovieId int NOT NULL
  );`))
  .then((res) => {
    console.log(null); //fixxx??
  })
  .catch((err) => {
    console.log(err);
  });
app.route('/login').get((req, res, next) => {
  console.log("requests: ", req)
  // addUser(req.params.usernameNEW, req.params.passwordNEW)
})
app.set('port', process.env.PORT || 3000);
app.listen(3000);
export const addUser = (username, password) => {
    const salt = Math.random(32);
    const hashed = crypto.createHash('sha256').update((salt + password)).digest('hex');
    //pre-statement = make prepared statements
    return db.query(
      'INSERT INTO Users(Username, Salt, Password) VALUES ($1, $2, $3);',
      [username, salt, hashed],
    ).then(() => db.query(
      'SELECT UserId FROM Users WHERE Username = $1;',
      [username],  
    ));//for error handling
  };

  //TODO: use prepared statements
const addFavorites = (username, movieId) => {
    db.query('INSERT INTO UserFavorites(Username, MovieId) VALUES ($1, $2);', [username, movieId]
    )//use for error handling
}


