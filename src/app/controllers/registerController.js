const User = require("../models/User");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

class RegisterController {

  async validate(req, res, next) {
    
    const checkExistUser = await User.findOne({
      where: {
        username: req.body.username,
      }
    })
    if (checkExistUser) {
      let msg = 'Username already exists';
      return res.json({ "error_code": 1, "message": msg });
    }

    const errors = validationResult(req).array();

    if (errors.length === 0) {
      let { username, password, email, name } = req.body;
      let hashedPassword = (await bcrypt.hash(password, 10)).toString();
      const user = await User.create({
        username: username,
        password_hash: hashedPassword,
        email: email,
        full_name: name,
        status: 0
      })
        .then((user) => {
          res.json({ "error_code": 0, "message": "User signup successfully", user })
        })
        .catch((err) => {
          res.json({ err })
        });
    } else {
      res.json({ "error_code": 1, "message": errors });
    }
  }
}

module.exports = new RegisterController();
