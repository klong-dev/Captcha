const { check, validationResult, body } = require("express-validator");

const validateForm = [
  check("name", "Please enter a fullname").notEmpty(),
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
  check("email", "Please enter an email address").notEmpty(),
  check("email", "Please enter a valid email address").isEmail(),
];

module.exports = {
  validateForm
};
