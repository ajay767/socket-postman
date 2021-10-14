const express = require('express');
const userController = require('./../controller/userController');
const router = express.Router();

router.route('/profile').get(userController.protect, userController.getUser);
router.route('/signup').post(userController.createUser);
router.route('/login').post(userController.login);

module.exports = router;
