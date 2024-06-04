const Captcha = require('../models/Captcha')
const User = require('../models/User')
const UserCaptcha = require('../models/UserCaptcha')
const UserToken = require('../models/UserToken')
const axios = require('axios')
const qs = require('qs');

class CaptchaController {
  async solve(req, res) {
    try {
      const image = req.body.image
      const token = req.url.split('token=')[1]
      const checkExistUser = await UserToken.findOne({
        where: {
          token: token
        }
      })
      if (!checkExistUser) {
        return res.json({ error_code: 0, message: "Không tìm thấy người dùng" });
      }
      const user = await UserCaptcha.findOne({
        where: {
          uid: checkExistUser.uid
        }
      })
      if (user.type == 0 && user.quantity <= 0) {
        return res.json({ error_code: 1, message: "Không đủ captcha" })
      }
      if (user.type == 1 && user.time <= 0) {
        return res.json({ error_code: 2, message: "Captcha đã hết hạn" })
      }
      if (user.type == 1 && user.remain <= 0) {
        return res.json({ error_code: 3, message: "Số lượng captcha còn lại không đủ" })
      }

      // nếu kiểm tra thành công thì
      if (user.type == 0) {
        await user.decrement('quantity', { by: 1 });
      }
      if (user.type == 1) {
        await user.decrement('remain', { by: 1 });
      }
      const response = await axios.post('http://42.96.0.15', qs.stringify({ base64: image, api_key: 'langcoc' }));
      res.json(response.data)
    }
    catch (err) {
      res.json(err)
    }
  }

  async pay(req, res) {
    try {
      const { productId, uid } = req.body
      if (!productId || !uid) {
        return res.json({ error_code: 4, message: "Tham số không hợp lệ" })
      }

      let quantity = req.body.quantity
      if (quantity === undefined) {
        // assign quantity = 0 if it is undefined
        quantity = 0
      }
      //----------------------------------------
      const [item, user] = await Promise.all([
        Captcha.findByPk(productId),
        User.findByPk(uid)
      ]);


      if (!item) {
        return res.json({ error_code: 100, message: "Sản phẩm không hợp lệ" });
      }
      if (!user) {
        return res.json({ error_code: 200, message: "Người dùng không hợp lệ" });
      }
      //-----------------------------------------
      const captchaType = item.type
      if ((captchaType === 0 && quantity === 0) || (captchaType === 1 && quantity !== 0)) {
        return res.json({ error_code: 1, message: "Yêu cầu không hợp lệ" });
      }
      const price = item.price
      let totalCost = 0

      const userMoney = user.money
      if (quantity) {
        totalCost = quantity * price
      } else {
        totalCost = item.price
      }
      if (totalCost > item.min) {
        return res.json({ error_code: 500, message: "Số lượng captcha không hợp lệ" });
      }
      if (userMoney < totalCost) {
        return res.json({ error_code: 300, message: "Không đủ tiền" });
      } else {
        const transaction = await UserCaptcha.findOne({
          where: {
            uid: uid,
            type: captchaType
          }
        })
        if (!transaction || transaction == null) {
          await UserCaptcha.create({
            uid: uid,
            type: item.type,   // type 0: sử dụng số lượng 
            quantity: quantity,
            remain: item.type * 10000,
            time: item.time
          })
        } else {
          await UserCaptcha.update({
            quantity: Number(transaction.quantity) + Number(quantity),
            remain: item.type * 10000,
            time: transaction.time + (item.type * item.time)
          }, {
            where: {
              uid: uid,
              type: captchaType
            }
          })
        }
        await user.decrement('money', { by: totalCost });
        return res.json({ error_code: 0, message: "Mua captcha thành công" })
      }
    } catch (error) {
      return res.json({ error_code: 1, message: error.message || error })
    }
  }
}

module.exports = new CaptchaController();
