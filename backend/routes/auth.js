const express = require('express');
const router = express.Router();
const authController=require('../controller/auth');

router.post('/signup', authController.signUpUser);
router.post('/login',authController.login)
// router.get('/get',authController.)

module.exports = router