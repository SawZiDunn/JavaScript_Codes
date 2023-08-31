var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://helloworld123:mFH85XXSwL6Tk2o7@cluster1.hks96kj.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("saw");
  dbo.collection("hello").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});