require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PW}>@cluster0.aggji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
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