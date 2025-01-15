const express = require('express');
const asyncHandler = require('express-async-handler');
const { index, show, store, update, destroy } = require('../controller/product.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const createProductRequest = require('../request/product/createProductRequest');
const updateProductRequest = require('../request/product/updateProductRequest');

const router = express.Router(); 

router.use(asyncHandler(authMiddleware));

router.get('', asyncHandler(index));
router.get('/:id', asyncHandler(show));

router.post('', asyncHandler(createProductRequest), asyncHandler(store));
router.put('/:id', asyncHandler(updateProductRequest), asyncHandler(update));
router.delete('/:id', asyncHandler(destroy));

module.exports = router;