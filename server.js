var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');
var app = express();

app.set('port', process.env.PORT);

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'client')));

// var resultsArr = [];


// app.post('/search', function (req, res) {
//   resultsArr = [];
//   var results = yelpSearch(req.body.location, req.body.term);
//   res.status(200).send('POST request successful');
// });

// app.get('/results', function (req, res) {
//   res.status(200).send(resultsArr);
// });


// //YELP API REQUEST
// function yelpSearch (loc, name) {
//   //GOOGLE API REQUEST
//   request('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + modifiedQuery + 'type=restaurant' + '&key=' + process.env.googleKey, function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var data = JSON.parse(body);
//       resultsArr.push({name: data.results[0].name, rating: data.results[0].rating});
//     } else {
//       console.error(error);
//     }
//   });
// }


// start listening to requests on port 3000
app.listen(process.env.PORT);

// export our app for testing and flexibility, required by index.js
module.exports = app;