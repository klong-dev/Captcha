const User = require("../models/User");
const bcrypt = require("bcrypt");
const createToken = require('../../middleware/CreateToken');

class LoginController {
  async validate(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username: username } });
      if (!user) {
        let wrongUsernameMsg = "Username or password is incorrect";
        res.json({ "error_code": 1, "message": wrongUsernameMsg });
      }
      const valid = await bcrypt.compare(password, user.password_hash);
      if (valid) {
        const token = createToken.createToken(user.id);
        res.json({ "error_code": 0, user, token });
      } else {
        let wrongPasswordMsg = "Password is incorrect";
        res.json({ "error_code": 1, "message": wrongPasswordMsg });
      }
    } catch (err) {
      res.json({ "error_code": 1, "message": err })
    }
  }
}

module.exports = new LoginController();