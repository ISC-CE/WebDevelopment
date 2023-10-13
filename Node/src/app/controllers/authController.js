const jwt = require("jsonwebtoken");
const UserController = require("./userController");
const { userSchema, authSchema } = require("../validations");

class AuthController {
  userController;

  constructor() {
    this.userController = new UserController();
  }

  async login(user) {
    // Validate user data
    const { error } = authSchema.validate(user);

    if (error) {
      throw new Error(error.details[0].message);
    }

    const { username, password } = user;

    const existingUser = await this.userController.getByUserName(username);
    if (!existingUser) {
      throw new Error("User not found");
    }

    if (password !== existingUser.password) {
      throw new Error("Authentication failed");
    }

    const token = jwt.sign(
      { username, email: existingUser.email, age: existingUser.age },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "5h",
      }
    );

    return token;
  }

  async register(user) {
    // Validate user data
    const { error } = userSchema.validate(user);

    if (error) {
      throw new Error(error);
    }
    return await this.userController.storeUser(user);
  }
}

module.exports = AuthController;
