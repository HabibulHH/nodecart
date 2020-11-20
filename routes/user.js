const express = require("express");
const User = require("../models/user");

const router = new express.Router();

/**
 * to create/signup user
 * @param req
 * @param res
 */
router.post("/users", async (req, res) => {
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
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/health", async (req, res) => {
  res.send("running");
});

router.get("/getallusers", async (req, res) => {
  const filter = {};
  const all = await User.find(filter);
  res.send(all);
});
module.exports = router;
