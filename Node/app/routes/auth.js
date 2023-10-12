const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../../../data");
const AuthController = require("../controllers/authController");

router.post("/register", function (req, res, next) {
  try {
    const user = new AuthController().register(req.body);
    return res.json({ message: "Registration successful", user }).status(200);
  } catch (error) {
    return res.json({ message: error.message }).status(400);
  }
});

router.post("/login", function (req, res, next) {
  try {
    const token = new AuthController().login(req.body);
    console.log(token);
    return res.json({ message: "list of users", token }).status(200);
  } catch (error) {
    console.log(JSON.stringify(error.message));

    return res.json({ message: error.message }).status(400);
  }
});

module.exports = router;
