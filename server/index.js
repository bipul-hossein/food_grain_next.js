// getting-started.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const morgan = require("morgan");

const { errorResponse } = require("./controllers/responseController");
const productRouter = require("./routes/productRouter");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

//middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("build"));

//routes
app.use("/api", productRouter);

// connect to DataBase on server site
// const url = `mongodb://localhost:27017/FoodGrainDB`;
// const url = process.env.DB_URL;
const url = process.env.DB_URL_AN;
const connectDB = async () => {
  try {
    await mongoose.connect(url, { dbName: "food_grain" });
    // await mongoose.connect(url, { dbName: "food_grainDB" });
    console.log("Database is connected now");
  } catch (error) {
    console.log("Database is not connected", error);
  }
};

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
  console.log(`Server is running on port http://localhost:${port}`);
  await connectDB();
});
