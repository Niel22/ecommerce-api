const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');

const updateUserequest = require('../request/updateUserRequest');
const { index, show, update, destroy, block, unblock } = require('../controller/user.controller');
const isAdmin = require('../middlewares/isAdmin');
const manageUser = require('../permission/manageUser');

router.get('', asyncHandler(authMiddleware), asyncHandler(manageUser), asyncHandler(index));
router.get('/:id', asyncHandler(authMiddleware), asyncHandler(manageUser), asyncHandler(show));
router.put('/:id', asyncHandler(authMiddleware), asyncHandler(manageUser), asyncHandler(updateUserequest.validateInput), asyncHandler(update));
router.delete('/:id', asyncHandler(authMiddleware),  asyncHandler(isAdmin), asyncHandler(destroy));
router.put('/block/:id', asyncHandler(authMiddleware), asyncHandler(isAdmin), asyncHandler(block));
router.put('/unblock/:id', asyncHandler(authMiddleware), asyncHandler(isAdmin), asyncHandler(unblock));

module.exports = router;