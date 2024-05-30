const User = require("../models/User");
const UserToken = require('../models/UserToken')
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const CreateCaptchaToken = require('../../middleware/CaptchaToken')
class RegisterController {

  async validate(req, res) {
    try {
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

        if (user) {
          const token = await CreateCaptchaToken()
          const userToken = await UserToken.create({
            uid: user.uid,
            token: token
          })
          return res.json({ "error_code": 0, "message": "User signup successfully", user })
        } else {
          res.json({ "error_code": 1, "message": "Error while creating user" })
        }
      } else {
        res.json({ "error_code": 1, "message": errors });
      }
    } catch (error) {
      res.json(error)
    }
  }
}

module.exports = new RegisterController();
