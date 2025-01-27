const express = require('express');
const asyncHandler = require('express-async-handler');
const { index, show, store, update, destroy } = require('../controller/product.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const createProductRequest = require('../request/product/createProductRequest');
const updateProductRequest = require('../request/product/updateProductRequest');
const upload = require('../helper/uploadImage');

const router = express.Router(); 

router.use(asyncHandler(authMiddleware));

router.get('', asyncHandler(index));
router.get('/:id', asyncHandler(show));

router.post('', upload.single('image'), asyncHandler(createProductRequest), asyncHandler(store));
router.put('/:id', asyncHandler(updateProductRequest), asyncHandler(update));
router.delete('/:id', asyncHandler(destroy));

module.exports = router;