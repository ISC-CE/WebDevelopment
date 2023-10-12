const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

const userController = new UserController();

/* GET users listing. */
router.get("/", function (req, res, next) {
  try {
    const users = userController.getUsers();
    return res.json({ message: "list of users", users }).status(200);
  } catch (error) {
    return res.json({ message: "Error getting users" }).status(400);
  }
});

router.get("/:id", function (req, res, next) {
  try {
    const user = userController.getUser(req.params.id);
    return res.json({ message: "list user", user }).status(200);
  } catch (error) {
    return res.json({ message: "Error getting user" }).status(400);
  }
});

router.patch("/:id", function (req, res, next) {
  try {
    const user = userController.updateUser(req.params.id, req.body);
    return res.json({ message: "User updated successfully", user }).status(200);
  } catch (error) {
    return res.json({ message: error.message }).status(400);
  }
});

router.delete("/:id", function (req, res, next) {
  try {
    const user = userController.deleteUser(req.params.id);
    return res.json({ message: "User deleted successfully", user }).status(200);
  } catch (error) {
    return res.json({ message: "Error deleting user" }).status(400);
  }
});

module.exports = router;

// Zecariah 3:4
