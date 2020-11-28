const mongoose = require("mongoose");
const comment = require("../models/comment");
// const urlConnect ="mongodb://lamnn:K4zKwnPcdbzoXUue@cluster0-shard-00-00.rrfws.mongodb.net:27017,cluster0-shard-00-01.rrfws.mongodb.net:27017,cluster0-shard-00-02.rrfws.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-zhl4zh-shard-0&authSource=admin&retryWrites=true&w=majority"
const urlConnect ="mongodb+srv://brogrammers2527:brogrammers2527@cluster0-mwti3.mongodb.net/test?retryWrites=true&w=majority"
//Connect to db
mongoose.connect(urlConnect, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Connect successfully!!");

  var newComment = new comment({
    title: "gud vler",
    name: "guest1",
    content: "so gud",
    star: 5,
    productID: "5df485878e98d6333450f7b6"
  });

  newComment.save(function(err) {
    if (err) throw err;
    console.log("Comment successfully saved.");
  });
});
