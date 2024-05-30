const Captcha = require('../models/Captcha')
const User = require('../models/User')
class AdminController {
  async loadCaptcha(req, res) {
    const captchas = await Captcha.findAll()
    res.json({ captchas })
  }

  async add(req, res) {
    try {
      const { name, price, type, time } = req.body
      const newCaptcha = await Captcha.create({
        name: name,
        price: price,
        type: type,
        time: time
      })
      res.json({ newCaptcha, "error_code": 0, "message": "Created successfully" })
    } catch (err) {
      res.json({ "error_code": 1, "message": err })
    }
  }

  async update(req, res) {
    try {
      const { id, name, price, type, time } = req.body
      const updatedItem = await Captcha.update({
        name: name,
        price: price,
        type: type,
        time: time
      }, {
        where: {
          id: id
        }
      })
      res.json({ updatedItem, "error_code": 0, "message": "Captcha updated successfully" })
    } catch (err) {
      res.json({ "error_code": 1, "message": err })
    }
  }

  async delete(req, res) {
    const id = req.body
    try {
      const deletedCaptcha = await Captcha.destroy({
        where: {
          id: id
        }
      })
      res.json({ deletedCaptcha, "error_code": 0, "message": "Deleted user" })
    } catch (err) {
      res.json({ "error_code": 1, "message": err })
    }
  }

  async updateUserStatus(req, res) {
    try {
      const { uid, type } = req.body
      const updatedUser = await User.update({
        type: type
      }, {
        where: {
          uid: uid
        }
      })
      res.json({ updatedUser, "error_code": 0, "message": "Updated user successfully" })
    } catch (err) {
      res.json({ "error_code": 1, "message": err })
    }
  }
}
module.exports = new AdminController()