// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/MusicianAvalApp', (err, db) => {
  if (err) {
    // if connection fails
    return console.log('Unable to connect with MongoDB server');
  }
  // connection succeeds
  console.log('Connected to MongoDB server');

  //closes connection with db
  db.close();
});
