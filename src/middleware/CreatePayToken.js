const crypto = require('crypto');
const UserToken = require('../app/models/UserToken');

async function autoGeneratedToken() {
  const generateToken = () => {
    const length = 6;
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    let token = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = crypto.randomInt(0, charset.length);
      token += charset[randomIndex];
    }
    return token;
  };

  let token;
  let tokenExists = true;
  // Generate a unique token
  while (tokenExists) {
    token = generateToken();
    const existingToken = await UserToken.findOne({ where: { token } });
    tokenExists = !!existingToken;
  }

  return token;
}

module.exports = autoGeneratedToken;
