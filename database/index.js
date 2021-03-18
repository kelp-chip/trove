require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.aggji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log("URI: ", uri);

const getCollection = function (cb) {
  client.connect(err => {
    const collection = client.db("trove").collection("users");
    collection.find({}).toArray((err, result) => {
      if (err) throw err;
      cb(result);
    });
  });
};

module.exports = { getCollection };