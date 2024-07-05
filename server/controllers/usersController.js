const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");
const { successResponse } = require("./responseController");

const handleRegisterUser = async (req, res, next) => {
  const { fullName, userId, username, password } = req.body;
  console.log(fullName, userId, username, password);

  try {
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
      fullName: fullName,
      userId: userId,
      username,
      password: hashedPassword,
      role: "user",
    });
    return successResponse(res, {
      statusCode: 201,
      message: "User registered successfully!",
    });
  } catch (error) {
    next(error);
  }
};

const handleLoginUser = async (req, res, next) => {
  const { userId, username, password } = req.body;
  console.log("hitting", userId, username, password);
  try {
    // Find user by email
    const user = await Users.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    console.log(isPasswordValid);

    // Generate JWT token
    const token = jwt.sign(
      { username: user.fullName, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.EXPIRES_IN,
      }
    );

    // res.json({
    //   success: true,
    //   message: "User successfully logged in!",
    //   accessToken: token,
    // });
    return successResponse(res, {
      statusCode: 200,
      message: "User successfully logged in!",
      payload: token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleRegisterUser, handleLoginUser };
