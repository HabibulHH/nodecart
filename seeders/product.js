const Product = require("../models/product");
const seedData = require("./productData");
require("../db/mongoConnect");

Product.insertMany(seedData, function (err) {
  console.log(err);
});
console.log("product created");
setTimeout(function () {
  return process.abort();
}, 1000);
