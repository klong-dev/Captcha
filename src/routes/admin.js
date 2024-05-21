const express = require("express");
const router = express.Router();

const adminController = require("../app/controllers/adminController");

router.get("/view", adminController.loadCaptcha);
router.post("/add", adminController.add);
router.post("/update", adminController.update);
router.post("/delete", adminController.delete);
router.post("/set-status", adminController.updateUserStatus);


module.exports = router;
