const { userModel } = require("../../infra/db/models/userModel");
const { userSchema } = require("../validations");

class UserController {
  userRepo;
  constructor() {
    this.userRepo = userModel;
  }
  async getUsers() {
    return await this.userRepo.find();
  }

  async getUser(id) {
    const user = await this.userRepo.findOne({ _id: id });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async getByUserName(username) {
    const user = await this.userRepo.findOne({ username });

    if (!user) {
      console.error("Couldn't find user", user);
      throw new Error("User not found");
    }
    return user;
  }

  async storeUser(user) {
    const { username, email } = user;
    const userExist = await this.checkIfEmailAndUsernameExist(email, username);

    if (userExist) {
      throw new Error("User already exists");
    }

    const newUser = new this.userRepo(user);
    await newUser.save();
    return newUser;
  }

  async updateUser(id, user) {
    const { error } = userSchema.validate(user);

    if (error) {
      throw new Error(error);
    }
    const { password, username, age } = user;

    const updatedDocument = await this.userRepo.findOneAndUpdate(
      { _id: id },
      { password, username, age },
      { new: true }
    );

    return updatedDocument;
  }

  async deleteUser(id) {
    return await this.userRepo.deleteOne({ _id: id }, { new: true });
  }

  async checkIfEmailAndUsernameExist(email, username) {
    const user = await this.userRepo.findOne({
      $or: [{ email }, { username }],
    });

    return !!user;
  }
}

module.exports = UserController;
