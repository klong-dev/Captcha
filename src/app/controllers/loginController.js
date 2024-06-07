const User = require("../models/User");
const bcrypt = require("bcrypt");

class LoginController {
  async validate(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username: username } });
      if (!user) {
        let wrongUsernameMsg = "Tên người dùng hoặc mật khẩu không đúng";
        return res.json({ "error_code": 1, "message": wrongUsernameMsg });
      }
      const valid = await bcrypt.compare(password, user.password_hash);
      if (valid) {
        res.json({ "error_code": 0, user});
      } else {
        let wrongPasswordMsg = "Mật khẩu không đúng";
        res.json({ "error_code": 2, "message": wrongPasswordMsg });
      }
    } catch (err) {
      res.json({ "error_code": 3, "message": err.message || err })
    }
  }
}

module.exports = new LoginController();
