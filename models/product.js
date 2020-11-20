const mongoose = require("mongoose");

const VariantSchema = new mongoose.Schema({
  color: String,
  size: [],
  quantity: Number,
});

const ProductSchama = new mongoose.Schema({
  name: String,
  price: Number,
  available: Boolean,
  variants: [VariantSchema],
});

const Product = mongoose.model("Product", ProductSchama);

module.exports = Product;
