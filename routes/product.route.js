const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

// get all products api
router.get('/', getProducts);

// get product by id api
router.get('/:id', getProduct);

// post product api
router.post('/', createProduct);

// update product by id api
router.put('/:id', updateProduct);

// delete product by id api
router.delete('/:id', deleteProduct);


module.exports = router;