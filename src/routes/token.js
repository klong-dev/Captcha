const express = require("express");
const router = express.Router();

const tokenController = require("../app/controllers/tokenController");

router.post("/load", tokenController.load);
router.post("/add", tokenController.add);
router.post("/delete", tokenController.delete);

module.exports = router;
