const express = require('express');
const router = express.Router();
const registerRequest = require('../request/registerRequest');
const loginRequest = require('../request/loginRequest');
const userController = require('../controller/user.controller');
const asyncHandler = require('express-async-handler');


router.post('/register', asyncHandler(registerRequest.validateInput), asyncHandler(userController.register));
router.post('/login', asyncHandler(loginRequest.validateInput), asyncHandler(userController.login));

module.exports = router;