const MongoClient = require('mongodb').MongoClient;
const url = "";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("saw");
  dbo.collection("hello").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});