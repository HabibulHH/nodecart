const express = require("express");
const User = require("../models/user");

const router = new express.Router();

/**
 * to create/signup user
 * @param req
 * @param res
 */
router.post("/register", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

/**
 * to login user
 * @param req
 * @param res
 */
router.post("/login", async (req, res) => {
  console.log("came ree");
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    console.log("came ree");
    res.status(400).send();
  }
});

/**
 * to monitor api health
 * @param req
 * @param res
 */
router.get("/health", async (req, res) => {
  res.send("running");
});

/**
 * to get all user
 * @param req
 * @param res
 */
router.get("/getallusers", async (req, res) => {
  const filter = {};
  const all = await User.find(filter);
  res.send(all);
});
module.exports = router;
