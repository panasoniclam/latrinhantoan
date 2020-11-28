const mongoose = require("mongoose");
const comment = require("../models/comment");
const Product = require("../models/product");
// const urlConnect ="mongodb://lamnn:K4zKwnPcdbzoXUue@cluster0-shard-00-00.rrfws.mongodb.net:27017,cluster0-shard-00-01.rrfws.mongodb.net:27017,cluster0-shard-00-02.rrfws.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-zhl4zh-shard-0&authSource=admin&retryWrites=true&w=majority"

const urlConnect ="mongodb+srv://brogrammers2527:brogrammers2527@cluster0-mwti3.mongodb.net/test?retryWrites=true&w=majority"

//Connect to db
mongoose.connect(
  urlConnect,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) throw err;
    console.log("Connect to update!!");
    Product.find({}, (err, res) => {
      console.log(res);
    });
  }
);
