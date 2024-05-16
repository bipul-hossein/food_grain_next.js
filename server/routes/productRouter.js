const express = require("express");
const {
  handleGetProducts,
  handleGetSingleProduct,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
} = require("../controllers/productsController");

const productRouter = express.Router();

//Post:api/id single product by product id
productRouter.post("/product", handleCreateProduct);

//Get:api/id single product by product id
productRouter.get("/product/:id", handleGetSingleProduct);

//Get:api/products all product
productRouter.get("/products", handleGetProducts);

//Put:api/id single product by product id
productRouter.put("/product/:id", handleUpdateProduct);

//Delete:api/id single product by product id
productRouter.delete("/product/:id", handleDeleteProduct);

module.exports = productRouter;
