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
        return res.json({ error_code: 0, message: "User not found" });
      }
      const user = await UserCaptcha.findOne({
        where: {
          uid: checkExistUser.uid
        }
      })
      if (user.type == 0 && user.quantity <= 0) {
        return res.json({ error_code: 1, message: "Not enough captcha" })
      }
      if (user.type == 1 && user.time <= 0) {
        return res.json({ error_code: 2, message: "Captcha expired" })
      }
      if (user.type == 1 && user.remain <= 0) {
        return res.json({ error_code: 3, message: "Remained captcha is not enough" })
      }

      // if the validation is success then
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
        return res.json({ error_code: 4, message: "Invalid parameters" })
      }
      let quantity = req.body.quantity
      if (quantity === undefined) {
        // assign quantity = 0 if it is undefined
        quantity = 0
      }
      //----------------------------------------
      const item = await Captcha.findByPk(productId)
      const user = await User.findByPk(uid)

      if (!item) {
        res.json({ "error_code": 100, "message": "Product is not valid" })
      }
      if (!user) {
        res.json({ "error_code": 200, "message": "User is not valid" })
      }
      //-----------------------------------------
      const captchaType = item.type
      if ((captchaType === 0 && quantity === 0) || (captchaType === 1 && quantity !== 0)) {
        return res.json({ "error_code": 1, "message": "Invalid request" });
      }
      const price = item.price
      let totalCost = 0
      const userMoney = user.money
      if (quantity) {
        totalCost = quantity * price
      } else {
        totalCost = item.price
      }
      if (userMoney < totalCost) {
        res.json({ "error_code": 300, "message": "Not enough money" });
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
            type: item.type,   // type 0: quantity use 
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
        res.json({ "error_code": 0, "message": "Captcha bought successfully" })
      }
    } catch (error) {
      res.json({ "error_code": 1, "message": error })
    }
  }
}
module.exports = new CaptchaController()