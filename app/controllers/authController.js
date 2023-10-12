const jwt = require("jsonwebtoken");

const { jwtSecretKey } = require("../../../../data");
const UserController = require("./userController");
const { userSchema, authSchema } = require("../validations");

class AuthController {
  userController;

  constructor() {
    this.userController = new UserController();
  }

  login(user) {
    // Validate user data
    const { error } = authSchema.validate(user);

    if (error) {
      throw new Error(error.details[0].message);
    }

    const { username, password } = user;

    const existingUser = this.userController.getByUserName(username);
    if (!existingUser) {
      throw new Error("User not found");
    }

    if (password !== existingUser.password) {
      throw new Error("Authentication failed");
    }

    const token = jwt.sign(
      { username, email: existingUser.email, age: existingUser.age },
      jwtSecretKey,
      {
        expiresIn: "1h",
      }
    );

    return token;
  }

  register(user) {
    // Validate user data
    const { error } = userSchema.validate(user);

    if (error) {
      throw new Error(error);
    }
    return this.userController.storeUser(user);
  }
}

module.exports = AuthController;
