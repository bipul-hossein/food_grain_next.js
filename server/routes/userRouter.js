const express = require("express");
const {
  handleRegisterUser,
  handleLoginUser,
} = require("../controllers/usersController");

const userRouter = express.Router();

//Post:api/id create user by
userRouter.post("/register", handleRegisterUser);

//GET:api/id Get user order
userRouter.post("/login", handleLoginUser);

module.exports = userRouter;
