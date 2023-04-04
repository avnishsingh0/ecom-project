const express = require("express");
const { addOrederItem } = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddlware");
const router = express.Router();


router.route("/").post(addOrederItem)

module.exports = router;