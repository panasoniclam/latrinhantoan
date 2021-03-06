const mongoose = require("mongoose");
const ProductCategory = require("../models/productCategory");
const urlConnect ="mongodb://lamnn:K4zKwnPcdbzoXUue@cluster0-shard-00-00.rrfws.mongodb.net:27017,cluster0-shard-00-01.rrfws.mongodb.net:27017,cluster0-shard-00-02.rrfws.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-zhl4zh-shard-0&authSource=admin&retryWrites=true&w=majority"
 
// Connect to database
mongoose.connect(urlConnect, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Connect successfully!!");

  var abc = new ProductCategory({
    name: "Quần",
    childName: ["Quần Dài", "Quần Ngắn", "Quần Thể Thao", "Quần Xì"]
  });

  abc.save(function(err) {
    if (err) throw err;
    console.log("Category successfully saved.");
  });
});
