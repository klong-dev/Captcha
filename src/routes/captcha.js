const express = require("express");
const router = express.Router();

const captchaController = require("../app/controllers/captchaController");

router.post("/pay", captchaController.pay);
router.post("/solve", captchaController.solve);

module.exports = router;
