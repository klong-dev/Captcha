const Captcha = require('../models/Captcha')

class ProductController {
  async loadItems(req, res) {
    const { type } = req.body;
    try {
      const items = await Captcha.findAll({
        where: {
          type: Number(type)
        }
      });

      if (!items.length) {
        return res.json({ message: 'Không tìm thấy captcha nào' });
      }

      const returnItems = items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price
      }));

      res.json(returnItems);
    } catch (error) {
      console.error('Lỗi khi tải captcha:', error);
      res.json({ message: error.message });
    }
  }
}

module.exports = new ProductController();
