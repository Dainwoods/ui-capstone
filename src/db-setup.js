
const express = require('express');
const app = express();
const sql = require('mysql');

let db = sql.createConnection({
  host: `/cloudsql/ui-capstone:us-central1:ui-capstone`,
  user: 'Diane', //seems wrong
  database: 'movies_and_users',
  password: 'UiCapstonePassword' //replace
});

app.route('/books/:userId')
  .get(function(req, res, next) {
    db.query(
      "SELECT * FROM `books` WHERE userId = ? LIMIT 3", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);