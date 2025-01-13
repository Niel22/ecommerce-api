const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');

const { register, login, handleRefreshToken, logout } = require('../controller/auth.controller');
const registerRequest = require('../request/registerRequest');
const loginRequest = require('../request/loginRequest');


router.post('/register', asyncHandler(registerRequest), asyncHandler(register));
router.post('/login', asyncHandler(loginRequest), asyncHandler(login));
router.post('/refresh', asyncHandler(handleRefreshToken));
router.get('/logout', asyncHandler(authMiddleware), asyncHandler(logout));


module.exports = router;