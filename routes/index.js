/**
 * Responsible to render index page of cart spa
 */
const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("index.html");
});

module.exports = router;
