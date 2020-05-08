const connection = require('./db');
const mysql = require('mysql');
const crypto = require ('crypto');

const getUser = (req) => {
   password = crypto.createHash('sha256').update(req.body.password).digest('hex')
   return new Promise((resolve) => connection.query(
        "SELECT Username FROM Users WHERE Username = ? AND Password = ?;", [req.body.username, password],
        function(error, rows) {
          if (error) throw error;
          //console.log('rows found:  '  , rows);
          resolve(rows);
          
        }
      )
    )
};
const addFavorite = (user, movie) => {
    return new Promise ((resolve) => { connection.query(
        "INSERT INTO UserFavorites (Username, MovieId) VALUES (?, ?);", [user, movie], 
        function (err, rows) {
            if (err) throw err;
            console.log('fave rowss inserted: ', rows);
            resolve(rows);
            //res.send({rows: rows});
        })
    });
    
}    
  
  const addUser = (req, res) => {
    const salt = crypto.randomBytes(32 / 2).toString('hex');
    const hashedPassword = crypto.createHash('sha256').update(req.body.passwordNEW).digest('hex');
    return new Promise( (resolve) => connection.query (
    "INSERT INTO Users(Username, Salt, Password) VALUES(?, ?, ?);", [req.body.usernameNEW, salt, hashedPassword],
    function(err, rows) {
      if (err) throw err;
      console.log('rowss inserted: ', rows);
      resolve(rows);
      //res.send({rows: rows});
    }
    ))
}

  
  const dbSetUp = (req, res ) => {
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
};

  module.exports = {
      dbSetUp,
      addUser,
      getUser,
      addFavorite
  };    