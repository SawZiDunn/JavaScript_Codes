var MongoClient = require('mongodb').MongoClient;
var url = "";

let obj1={
  hobby:"sleeping",
  skill:"being_independent"
}

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("saw");
  
  dbo.collection("hello").insertOne(obj1,function(err,res){
    if (err) throw err;
    console.log("object created");
    db.close();
  })
  });
