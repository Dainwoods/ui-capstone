require('dotenv').config()

const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const session = require('client-sessions');;
const redis = require('redis');
//const redisStore = require('connect-redis')(session);
//const client  = redis.createClient();
const querries = require('./querries.js');


app.use(session({
  cookieName: 'session',
  secret: 'secret_string',
  //session duration in ms
  duration: 120 * 60 * 1000,
}));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Server started on port '+ app.get('port'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', express.static('../build'))

app.post('/', (req, res) => {
  console.log('home called');
  res.send({session: req.session.user});
  
});

app.post('/login', (req, res) => {
  console.log('sesssion:  ', req.session);
  querries.getUser(req).then( (rows) =>{
    if (rows.length > 0) {
      req.session.user = rows[0].Username;
      console.log('session:  ', req.session);
      res.send({success: true, result: rows});
    } else {
      res.send({success: false, result: 'No user found'})
    }
  });
  
});
app.post('/favorites', (req, res) => {
  if(req.session.user === undefined){
    res.send({activeSession: false, movies: []});
  } else {
    querries.getFavorites(req.session.user).then((rows) => {
     if (rows.length > 0) {
       res.send({activeSession: true, movies: rows});
     } else {
       res.send({activeSession: true, movies: []});
     }
    });
  }
})
app.post('/signup', (req, res) =>  {
  querries.addUser(req, res).then((result) => {
    if (result.affectedRows > 0){
      req.session.user = req.body.usernameNEW;
      res.send({success: true, userExists: false});
    } else {
      res.send({success: false, userExiss: false});
    }
  });
});


app.post('/ifSession', (req, res) => {
  // no user
  console.log('ifSession post session user: ', req.session.user);
  if (req.session.user === undefined) {
    //onsole.log('nom user, results sent')
    res.send({session: false});
  // active user exists
  } else {
    console.log('testing works', req.session.user);
    res.send({session: true});
  }
});

app.post('/logout', (req, res) => {
  if (req.session.user === undefined) {
  } else {
    req.session.destroy();
    res.clearCookie('session');
    res.redirect('/');
    console.log('session KILLED:  ', req.session);
  }
});


app.post('/favorite', (req, res) => {  
  if (req.session.user === undefined) {
    res.send({success: 'no-user'});
  } else{
  querries.addFavorite(req.session.user, req.body.movie, req.body.addingMovie).then((result) => {
    if (result.affectedRows > 0){
      res.send({success: true});
    }
  }
  )}
})



app.get('/status', (req, res) => res.send('Working!'));