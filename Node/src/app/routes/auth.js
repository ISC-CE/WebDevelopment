const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../../../data");
const AuthController = require("../controllers/authController");

router.post("/register", async function (req, res, next) {
  try {
    const user = await new AuthController().register(req.body);
    return res.json({ message: "Registration successful", user });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
});

router.post("/login", async function (req, res, next) {
  console.log(process.env);
  try {
    const token = await new AuthController().login(req.body);
    return res.json({ message: "list of users", token });
  } catch (error) {
    console.log(JSON.stringify(error.message));

    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
