const mongoose = require("mongoose");
const label = require("../models/label");
// const urlConnect ="mongodb://lamnn:K4zKwnPcdbzoXUue@cluster0-shard-00-00.rrfws.mongodb.net:27017,cluster0-shard-00-01.rrfws.mongodb.net:27017,cluster0-shard-00-02.rrfws.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-zhl4zh-shard-0&authSource=admin&retryWrites=true&w=majority"
const urlConnect ="mongodb+srv://brogrammers2527:brogrammers2527@cluster0-mwti3.mongodb.net/test?retryWrites=true&w=majority"


// Connect to database
mongoose.connect(urlConnect, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Connect successfully!!");

  var abc = new label({
    list: [
      "Shiro",
      "Mob",
      "Crepp",
      "Zara",
      "Levis",
      "Gucci",
      "Dolce & Gabbana",
      "Others"
    ]
  });

  abc.save(function(err) {
    if (err) throw err;
    console.log("Category successfully saved.");
  });
});
