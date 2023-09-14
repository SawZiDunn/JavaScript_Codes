var MongoClient = require('mongodb').MongoClient;
var url = "";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("saw");
  dbo.collection("hello").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});