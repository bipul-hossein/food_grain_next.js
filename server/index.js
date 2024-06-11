// getting-started.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { errorResponse } = require("./controllers/responseController");
const productRouter = require("./routes/productRouter");
const ordersRouter = require("./routes/ordersRouter");
const Users = require("./models/userModel");

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
app.use("/api", ordersRouter);

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

// test purpose

// User Registration
app.post("/api/register", async (req, res) => {
  const { userFullName, userid, username, password } = req.body;

  console.log(userFullName, userid, username, password);
  // Check if email already exists
  const existingUser = await Users.findOne({ username });
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exist!!!",
    });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user into the database
  await Users.create({
    userfname: userFullName,
    userid,
    username,
    password: hashedPassword,
    role: "user",
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully!",
  });
});

// User Login
app.post("/api/login", async (req, res) => {
  const { userid, username, password } = req.body;

  // Find user by email
  const user = await Users.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Compare hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Generate JWT token
  const token = jwt.sign(
    { username: user.userfname, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.EXPIRES_IN,
    }
  );

  res.json({
    success: true,
    message: "User successfully logged in!",
    accessToken: token,
  });
});

// end test purpose

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
