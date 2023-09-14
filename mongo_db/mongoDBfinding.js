var MongoClient = require('mongodb').MongoClient;
var url = "";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("saw");
  dbo.collection("hello").find({}, { projection: { name: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});