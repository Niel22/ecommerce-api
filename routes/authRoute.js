const express = require('express');
const router = express.Router();
const registerRequest = require('../request/registerRequest');
const loginRequest = require('../request/loginRequest');
const updateUserequest = require('../request/updateUserRequest');
const userController = require('../controller/user.controller');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');
const manageUser = require('../permission/manageUser');

router.get('', asyncHandler(authMiddleware), asyncHandler(manageUser), asyncHandler(userController.index));
router.get('/:id', asyncHandler(authMiddleware), asyncHandler(manageUser), asyncHandler(userController.show));
router.post('/register', asyncHandler(registerRequest.validateInput), asyncHandler(userController.register));
router.post('/login', asyncHandler(loginRequest.validateInput), asyncHandler(userController.login));
router.put('/:id', asyncHandler(authMiddleware), asyncHandler(manageUser), asyncHandler(updateUserequest.validateInput), asyncHandler(userController.update));
router.delete('/:id', asyncHandler(authMiddleware),  asyncHandler(isAdmin), asyncHandler(userController.destroy));

module.exports = router;