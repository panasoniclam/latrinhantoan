const mongoose = require("mongoose");
const Product = require("../models/product");
const urlConnect ="mongodb://lamnn:K4zKwnPcdbzoXUue@cluster0-shard-00-00.rrfws.mongodb.net:27017,cluster0-shard-00-01.rrfws.mongodb.net:27017,cluster0-shard-00-02.rrfws.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-zhl4zh-shard-0&authSource=admin&retryWrites=true&w=majority"

 
// Connect to database
mongoose.connect(urlConnect, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Connect successfully!!");
  
  var product = new Product({
    name: "Trang trí nữ bằng da",
    description: "Đôi khi có những thứ không ai biết nó là gì luôn",
    stock: 123,
    price: 444,
    tags:["#vip","#pro","#cute"],
    size: ["S","M"],
    productType: { main: "Phụ Kiện", sub: "Trang Trí"},
    color: ["Nâu"],
    pattern: "Trơn",
    images: [
      "product-39.jpg",
      "product-39-01.jpg",
      "product-39-02.jpg"
    ],
    label: "Mob",
    materials: ["100% Da"]
  });

  product.save(function(err) {
    if (err) throw err;
    console.log("Product successfully saved.");
  });
});
