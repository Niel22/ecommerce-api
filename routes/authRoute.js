const express = require('express');
const router = express.Router();
const registerRequest = require('../request/registerRequest');
const userController = require('../controller/user.controller');

router.post('/register', registerRequest.validateInput, userController.register);

module.exports = router;