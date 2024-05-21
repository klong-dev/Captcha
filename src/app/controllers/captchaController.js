const Captcha = require('../models/Captcha')
const User = require('../models/User')
const UserCaptcha = require('../models/UserCaptcha')
const AutoGenerateToken = require('../../middleware/CaptchaToken')
class CaptchaController {
  async pay(req, res) {
    try {
      const { productId, uid } = req.body
      let quantity = req.body.quantity
      if (quantity === undefined) {
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
            uid: uid, type: captchaType
          }
        })
        if (!transaction || transaction == null) {
          const token = await AutoGenerateToken()
          await UserCaptcha.create({
            uid: uid,
            type: item.type,   // type 0: quantity use 
            quantity: quantity,
            token: token,
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
        res.json({ "error_code": 0, "message": "Captcha bought successfully" })
      }
    } catch (error) {
      res.json({ "error_code": 1, "message": err })
    }
  }
}
module.exports = new CaptchaController()