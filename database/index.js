require("dotenv").config();
const { MongoClient } = require("mongodb");

  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.aggji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

  const getCollections = function (user_id, cb) {
    client.connect(err => {
      if (err) throw err;
      const collection = client.db("trove").collection("users");
      collection.findOne({ _id: Number(user_id)}, (err, result) => {
        if (err) throw err;
        console.log(result)
        cb(result.collections);
      });
    });
  };

const getCollection = function (user_id, collection_id, cb) {
  client.connect(err => {
    const collection = client.db("trove").collection("users");
    collection.findOne({_id: (user_id)})
    .then(results => {
      let collection = results.collections.filter(collection => collection.id === collection_id);
      cb(collection);
    })
  });
};

module.exports = { getCollections, getCollection };
