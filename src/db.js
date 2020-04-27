const mysql = require('mysql');

let connection = 
mysql.createConnection({
        host: `34.66.29.36`,
        user: 'root', //seems wrong
        database: 'movies_and_users',
        password: 'UiCapstonePassword', //replace
        // host:`/cloudsql/ui-capstone:us-central1:ui-capstone`,
});
  
connection.connect(function(err) {
      if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
      }
      console.log('Connected as thread id: ' + connection.threadId);
    });
  
  module.exports = connection;
// module.exports = {
//     db: 'mongodb://localhost:3000/reactaxios'
// };