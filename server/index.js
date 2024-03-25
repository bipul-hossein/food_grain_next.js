// getting-started.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const createError = require("http-errors");

const {
  successResponse,
  errorResponse,
} = require("./controllers/responseController");
const Product = require("./models/productModel");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

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

// express error handling middleware
// client error handling
app.use((req, res, next) => {
  next(createError(404, "Route Not Found"));
});

// server error handling -all the error coming here.
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
});
