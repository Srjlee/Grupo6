const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/:id", async (req, res) => {
  try {
    const response = await User.findByPk(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(404).json("User not found");
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await User.findAll();
    res.json(response);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  const { email, username } = req.body;
  try {
    const response = await User.create({
      username: username,
      email: email,
    });
    res.json(response.toJSON());
  } catch (error) {    
    res.json(error);
  }
});

module.exports = router;
