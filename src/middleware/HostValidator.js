function check(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Request from IP: ${ip}`);
  const allowedIPs = ['127.0.0.1', '::1', 'localhost', '::ffff:127.0.0.1'];
  if (allowedIPs.includes(ip)) {
    console.log('Truy cập thành công, ip hợp lệ')
    next();
  } else {
    console.log('Truy cập thất bại, ip không hợp lệ')
    res.status(403).json({ "error_code": 403, "message": "Access Denied" });
  }
};

module.exports = { check };
