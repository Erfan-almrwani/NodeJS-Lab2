// server.js
// Import express
const express = require('express');

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const productRoutes = require('./routes/productsRoutes');

// Use the routes
app.use('/api/products', productRoutes);

// Define PORT
const PORT = 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
