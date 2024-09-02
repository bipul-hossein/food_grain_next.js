// Import required modules
const data = require('../db/data');
const Product = require('../models/productModel');
const { successResponse } = require('./responseController');



// Rename function to better describe its purpose and use camelCase for consistency
const seedProducts = async (req, res, next) => {
  try {
    // Delete all existing products
  // await Product.deleteMany({});

    // Create new product
    // console.log(data);
    const products = await Product.insertMany(data.products);
    
    // Return a successful response with the created products
    return successResponse(res, {
      statusCode: 201,
      message: 'products created successfully', // Improve message readability
      payload: products,
    });
  } catch (error) {
    // Forward the error to the error handling middleware
    next(error);
  }
};

// Export the function
module.exports = { seedProducts };