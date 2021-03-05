// import pkg from 'mongodb';
// const {MongoClient} = pkg;
require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const getCollection = function (cb) {
  client.connect(err => {
    const collection = client.db("JoelsStuff").collection("Baseball Cards");

    collection.find({}).toArray((err, result) => {
      if (err) throw err;
      cb(result);
    });
  });
};

module.exports = { getCollection: getCollection };