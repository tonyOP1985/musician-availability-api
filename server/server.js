const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
// const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Musician} = require('./models/musician');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/musicians', (req, res) => {
  var musician = new Musician({

  });
});
