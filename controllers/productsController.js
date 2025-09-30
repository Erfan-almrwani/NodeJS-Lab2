// controllers/productsController.js

// Temporary in-memory array for products
let products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Book', category: 'Education' }
];

// Get all products
const getAllProducts = (req, res) => {
    // Return list of products
    res.json(products);
};

// Get single product by ID
const getSingleProduct = (req, res) => {
    // Extract id from params
    const id = parseInt(req.params.id);

    // Find product
    const product = products.find(p => p.id === id);

    // If not found, return error
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    // Return product
    res.json(product);
};

// Export functions
module.exports = { getAllProducts, getSingleProduct, products };
