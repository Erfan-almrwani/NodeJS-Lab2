// routes/productsRoutes.js
const express = require('express');
const router = express.Router();

// Import controller
const { getAllProducts, getSingleProduct } = require('../controllers/productsController');

// GET all products
router.get('/', getAllProducts);

// GET single product by ID
router.get('/:id', getSingleProduct);

module.exports = router;
