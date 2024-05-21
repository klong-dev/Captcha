const User = require('../models/User')

class PaymentController {
  async payment(req, res) {
    const { uid, money } = req.body
    console.log(uid, money)
    try {
      const user = await User.findOne({ where: { uid: uid } });
      if (!user) {
        return res.json({ "error_code": 1, "message": 'User not found' });
      }
      await user.increment('money', { by: money });
      res.json({ "error_code": 0, "message": 'Updated success' })
    } catch (error) {
      res.json({ "error_code": 1, "message": error.message })
    }
  }
}

module.exports = new PaymentController();
