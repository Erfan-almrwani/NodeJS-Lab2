// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
 feature/crud-operations
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

// Import controller
const { getAllProducts, getSingleProduct } = require('../controllers/productsController');

// GET all products
router.get('/', getAllProducts);

// GET single product by ID
router.get('/:id', getSingleProduct);
 main

module.exports = router;
