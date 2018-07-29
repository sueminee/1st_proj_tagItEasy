const express = require('express');
// const parser = require('body-parser');
// const router = require('./routes.js');

const app = express();
const port = process.env.PORT || 8000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
app.get('/', (req, res) => {
    res.send('hello world yaho');
});
//create a GET route
// app.get('/signup', 
//   function(req, res) {
//     res.render('signup');
//   });

// app.post('/signup', 
//   function(req, res) {
//     console.log('req.body', req.body);
//     var userName = req.body.username;
//     var password = req.body.password;
    
//     new User({ username: userName }).fetch().then(function(found) {
//       if (found) {
//         res.status(404).send('Sorry, This ID has been taken! Go back to the previous page.');
//       } else {
//         Users.create(new User({
//           username: userName,
//           password: password
//         })).then(() => {
//           res.redirect('/');
//         });
//       }
//     });
//   });