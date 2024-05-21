const User = require("../app/models/User");
const { check, validationResult, body } = require("express-validator");

const validateForm = [
  check("username", "Please enter a username").notEmpty(),
  check("username", "Username must be at least 4 characters long").isLength({
    min: 4,
  }),
  // check("phone", "Phone number is not correct ").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g),
  check("password", "Please enter a password").notEmpty(),
  check("password", "Password must be at least 8 characters long").isLength({
    min: 8,
  }),
  check(
    "password",
    "Password must contain at least 1 letter"
  ).matches(/^[\w.]+/),

  check("confirm-password", "Please enter a confirmation password").notEmpty(),
  check("confirm-password", "Confirmation password does not match").custom(
    (value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirmation password does not match");
      }
      return true;
    }
  ),
];

module.exports = {
  validateForm
};
