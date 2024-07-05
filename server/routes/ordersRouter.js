const express = require("express");
const {
  handleNewOrders,
  handleGetOrder,
  handleAllGetOrders,
  handleGetOrderById,
} = require("../controllers/ordersController");

const ordersRouter = express.Router();

//Post:api/id create product order by
ordersRouter.post("/order", handleNewOrders);

//GET:api/id Get products order
ordersRouter.get("/orders", handleAllGetOrders);

//GET:api/id Get product order by
ordersRouter.get("/order", handleGetOrder);

//GET:api/id Get product order by
ordersRouter.get("/orderbyid/:id", handleGetOrderById);

module.exports = ordersRouter;
