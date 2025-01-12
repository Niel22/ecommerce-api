const express = require('express');
const router = express.Router();
const registerRequest = require('../request/registerRequest');
const loginRequest = require('../request/loginRequest');
const updateUserequest = require('../request/updateUserRequest');
const userController = require('../controller/user.controller');
const asyncHandler = require('express-async-handler');

router.get('', asyncHandler(userController.index));
router.get('/:id', asyncHandler(userController.show));
router.post('/register', asyncHandler(registerRequest.validateInput), asyncHandler(userController.register));
router.post('/login', asyncHandler(loginRequest.validateInput), asyncHandler(userController.login));
router.put('/:id', asyncHandler(updateUserequest.validateInput), asyncHandler(userController.update));
router.delete('/:id', asyncHandler(userController.destroy));

module.exports = router;