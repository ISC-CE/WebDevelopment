const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  return res.json({ message: "Healthy" }).status(200);
});

module.exports = router;
