const Joi = require("joi");

// Define the validation schema for a user
const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required(),
  password: Joi.string().alphanum().min(5).max(200).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).max(120).required(),
});

const authSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required(),
  password: Joi.string().alphanum().min(5).max(200).required(),
});

module.exports = {
  userSchema,
  authSchema,
};
