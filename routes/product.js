const express = require("express");
const Product = require("../models/product");

const router = new express.Router();

/**
 * Responsible to return all products
 */
router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

/**
 * Responsible to create a product
 */
router.post("/product", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send({ message: "Product Created" });
  } catch (e) {
    res.status(400).send(e);
  }
});

/**
 * Responsible to delete all products
 */
router.put("/delete", async (req, res) => {
  await Product.deleteMany({});
  res.status(201).send({ message: "All Product Deleted" });
});

module.exports = router;
