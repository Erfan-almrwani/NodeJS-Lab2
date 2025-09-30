// controllers/productsController.js

 feature/crud-operations
let products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Book', category: 'Education' }
];

// GET all
const getAllProducts = (req, res) => res.json(products);

// GET single
const getSingleProduct = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

// CREATE product
const createProduct = (req, res) => {
  const { name, category } = req.body;
  if (!name || !category) {
    return res.status(400).json({ message: 'Name and category are required' });
  }
  const newProduct = { id: products.length ? products[products.length - 1].id + 1 : 1, name, category };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// UPDATE product
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.name = req.body.name || product.name;
  product.category = req.body.category || product.category;

  res.json(product);
};

// DELETE product
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const initialLength = products.length;
  products = products.filter(p => p.id !== id);
  if (products.length === initialLength) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({ message: 'Product deleted successfully' });
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
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
 main
