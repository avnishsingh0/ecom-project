const express = require("express");
const {authController,getUserProfile,registerUser, updateUserProfile} =require('../controllers/usersController')
const {protect} = require('../middlewares/authMiddlware')
const router = express.Router();
// user reg
router.route('/').post(registerUser)
// user login
router.post("/login", authController);
// user profile
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
module.exports = router;