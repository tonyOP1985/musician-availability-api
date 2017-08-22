const _ = require('lodash');
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


//returns all musicians
app.get('/musicians', (req, res) => {
  Musician.find().then((musicians) => {
    res.send({musicians});
  }, (e) => {
    res.status(400).send(e);
  }).catch((e) => {
    console.log(e);
  });
});


//return musician by id
app.get('/musicians/:id', (req, res) => {
  var id = req.params.id;
  //invalid id
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  //incorrect valid id
  Musician.findById(id).then((musician) => {
    if(!musician) {
      return res.status(404).send();
    }
    //correct id
    res.send({musician});
  }).catch((e) => {
    res.status(400).send();
  });
});


//delete musicians
app.delete('/musicians/:id', (req, res) => {
 var id = req.params.id;
 //invalid id
 if (!ObjectID.isValid(id)) {
   return res.status(404).send();
 }
 //incorrect valid id
 Musician.findByIdAndRemove(id).then((musician) => {
   if (!musician) {
     return res.status(404).send();
   }
   //correct id
   res.send({musician});
 }).catch((e) => {
   res.status(400).send();
 });
});


//update musician
app.patch('/musicians/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['musician', 'instruments']);

  //invalid id
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  //need to implement update for dates

  Musician.findByIdAndUpdate(id, {$set: body}, {new: true}).then((musician) => {
    if (!musician) {
      return res.status(404).send();
    }

    res.send({musician});
  }).catch((e) => {
    res.status(400).send();
  });
});



app.listen(`${port}`, () => {
  if (port === 3000) {
    console.log('Started on port 3000');
  }
});
