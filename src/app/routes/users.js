const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

const userController = new UserController();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await userController.getUsers();
    return res.json({ message: "list of users", users });
  } catch (error) {
    return res.status(400).json({ message: "Error getting users" });
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const user = await userController.getUser(req.params.id);
    return res.json({ message: "list user", user });
  } catch (error) {
    return res.status(400).json({ message: "Error getting user" });
  }
});

router.patch("/:id", async function (req, res, next) {
  try {
    const user = await userController.updateUser(req.params.id, req.body);
    return res.json({ message: "User updated successfully", user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const user = await userController.deleteUser(req.params.id);
    return res.json({ message: "User deleted successfully", user });
  } catch (error) {
    return res.status(400).json({ message: "Error deleting user" });
  }
});

module.exports = router;
