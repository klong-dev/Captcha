const register = require('./register');
const product = require('./product');
const payment = require('./payment');
const captcha = require('./captcha')
const token = require('./token');
const admin = require('./admin');
const login = require('./login');


function routes(app) {
  app.use('/login', login);
  app.use('/register', register);
  app.use('/payment', payment);
  app.use('/captcha', captcha);
  app.use('/product', product);
  app.use('/token', token);
  app.use('/admin', admin);
}

module.exports = routes;