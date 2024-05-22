  const Captcha = require('../models/Captcha')

  class ProductController {
    async loadItems(req, res) {
      const { type } = req.body;
      console.log('Request body:', type);

      try {
        const items = await Captcha.findAll({
          where: {
            type: Number(type)
          }
        });

        if (!items.length) {
          return res.json({ message: 'No items found' });
        }

        const returnItems = items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price
        }));

        res.json(returnItems);
      } catch (error) {
        console.error('Error fetching items:', error);
        res.json({ message: 'Error while fetching' });
      }
    }
  }

  module.exports = new ProductController();
