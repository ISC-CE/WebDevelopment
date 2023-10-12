const { usersDB } = require("../../../../data");
const { userSchema } = require("../validations");

class UserController {
  getUsers() {
    return usersDB;
  }

  getUser(id) {
    const user = usersDB.find((user) => user.id == id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  getByUserName(username) {
    const user = usersDB.find((user) => user.username === username);

    if (!user) {
      console.error("Couldn't find user", user);
      throw new Error("User not found");
    }
    return user;
  }

  storeUser(user) {
    const { username, email } = user;
    const isUserExist = () =>
      usersDB.some(
        (user) => user.username === username || user.email === email
      );

    if (isUserExist()) {
      throw new Error("User already exists");
    }
    const id = usersDB.length + 1;
    user = { ...user, id };
    usersDB.push(user);
    return user;
  }

  updateUser(id, user) {
    const { error } = userSchema.validate(user);

    if (error) {
      throw new Error(error);
    }

    const userIndex = usersDB.findIndex((user) => user.id == id);
    if (userIndex === -1) {
      throw new Error("User not found");
    }
    const { password, username, age } = user;
    usersDB[userIndex] = { ...usersDB[userIndex], username, password, age };
    return usersDB[userIndex];
  }

  deleteUser(id) {
    const userIndex = usersDB.findIndex((user) => user.id == id);
    if (userIndex === -1) {
      throw new Error("User not found");
    }
    // Remove the user from the userDB
    return usersDB.splice(userIndex, 1)[0];
  }
}

module.exports = UserController;
