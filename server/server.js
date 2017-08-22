// const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Musician} = require('./models/musician');


var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

//create new musicians
app.post('/musicians', (req, res) => {
  console.log(req.body);
  var musician = new Musician({
    musician: req.body.musician,
    instruments: req.body.instruments,
    dates: req.body.dates //need to fix dates.  dates do not get posted
  });

  musician.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(400).send(e);
  });
});



app.listen(`${port}`, () => {
  if (port === 3000) {
    console.log('Started on port 3000');
  }
});
