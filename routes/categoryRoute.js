const express = require('express');
const asyncHandler = require('express-async-handler');
const { index, store, show, update, destroy } = require('../controller/category.controller');
const isAdmin = require('../middlewares/isAdmin');
const createCategoryRequest = require('../request/category/createCategoryRequest');
const updateCategoryRequest = require('../request/category/updateCategoryRequest');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(asyncHandler(authMiddleware));

router.get('', asyncHandler(index));
router.get('/:id', asyncHandler(show));


router.use(asyncHandler(isAdmin));

router.post('', asyncHandler(createCategoryRequest), asyncHandler(store));
router.put('/:id', asyncHandler(updateCategoryRequest), asyncHandler(update));
router.delete('/:id', asyncHandler(destroy));

module.exports = router;