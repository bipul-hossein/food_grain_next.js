const express = require('express');
const { seedProducts } = require('../controllers/seedController');

const seedRouter = express.Router();

seedRouter.post("/v1/seed/products", seedProducts);


module.exports = seedRouter;