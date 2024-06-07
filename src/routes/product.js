const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/productController");

router.post("/load", productController.loadItems);

module.exports = router;
