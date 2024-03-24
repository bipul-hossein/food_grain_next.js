// getting-started.js
const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const { successResponse } = require("./controllers/responseController");
const Product = require("./models/productModel");
const app = express();
const port = 5000;

// connect to DataBase on server site
// const url = `mongodb://localhost:27017/FoodGrainDB`;
const url = process.env.DB_URL;
const connectDB = async () => {
  try {
    // await mongoose.connect(url);
    await mongoose.connect(url, { dbName: "food_grain" });
    console.log("Database is connected now");
  } catch (error) {
    console.log("Database is not connected", error);
  }
};

app.get("/products", async (req, res, next) => {
  try {
    const getProducts = await Product.find({}).lean();

    return successResponse(res, {
      statusCode: 200,
      message: "Products return successfully",
      payload: getProducts,
    });
  } catch (error) {
    next(error);
  }
});

app.get("/product/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getProduct = await Product.findOne({ url_title: id }).lean();
    console.log(getProduct);
    return successResponse(res, {
      statusCode: 200,
      message: "Product return success",
      payload: getProduct,
    });
  } catch (error) {
    next(error);
  }
});
app.get("/", (req, res) => {
  res.send("Hello next World!");
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
});
