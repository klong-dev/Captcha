const UserToken = require('../models/UserToken');
const CreateCaptchaToken = require('../../middleware/CaptchaToken');

class TokenController {
  async load(req, res) {
    try {
      const { uid } = req.body;
      if (!uid) {
        return res.json({ error_code: 4, message: "Tham số không hợp lệ" });
      }
      const user = await UserToken.findAll({
        where: {
          uid: uid
        }
      });
      if (!user || user.length === 0) {
        res.json({ error_code: 100, message: "Người dùng chưa được tạo" });
      } else {
        const tokens = user.map(token => token.token);
        return res.json(tokens);
      }
    } catch (error) {
      res.json(error);
    }
  }

  async add(req, res) {
    try {
      const { uid } = req.body;
      if (!uid) {
        return res.json({ error_code: 4, message: "Tham số không hợp lệ" });
      }
      const token = await CreateCaptchaToken();
      const user = UserToken.create({
        uid: uid,
        token: token
      });

      if (user) {
        res.json({ error_code: 0, message: "Tạo token thành công" });
      }
    } catch (error) {
      res.json(error);
    }
  }

  async delete(req, res) {
    try {
      const { uid, token } = req.body;
      if (!uid || !token) {
        return res.json({ error_code: 4, message: "Tham số không hợp lệ" });
      }
      const user = await UserToken.findAll({
        where: {
          uid: uid
        }
      });
      if (user.length <= 1) {
        return res.json({ error_code: 1, message: "Chỉ còn 1 token! Không thể xóa" });
      } else {
        await UserToken.destroy({
          where: {
            uid: uid,
            token: token
          }
        });
        res.json({ error_code: 3, message: "Xóa token thành công" });
      }
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new TokenController();
