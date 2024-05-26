const User = require("../app/models/User");
const { check, validationResult, body } = require("express-validator");

const validateForm = [
  check("username", "Please enter a username").notEmpty(),
  check("username", "Username must be at least 4 characters long").isLength({
    min: 4,
  }),
  check("password", "Please enter a password").notEmpty(),
  check("password", "Password must be at least 8 characters long").isLength({
    min: 8,
  }),
  check(
    "password",
    "Password must contain at least 1 letter"
  ).matches(/^[\w.]+/),

];

module.exports = {
  validateForm
};
