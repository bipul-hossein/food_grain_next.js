const Orders = require("../models/ordersModel");
const { successResponse } = require("./responseController");

const handleNewOrders = async (req, res, next) => {
  try {
    const {
      userPhone,
      fullName,
      address,
      thana,
      products,
      subtotal,
      shipping,
      total,
    } = req.body;
    const findUser = await Orders.findOne({ userPhone });

    if (!findUser) {
      const newOrders = await Orders.create({
        userPhone,
        userInfo: {
          fullName: fullName,
          address: address,
          thana: thana,
        },
        orders: {
          products,
          subtotal,
          shipping,
          total,
        },
      });

      return successResponse(res, {
        statusCode: 200,
        message: "Order Successfully Completed",
        payload: newOrders,
      });
    } else {
      const result = await Orders.findOneAndUpdate(
        { userPhone },
        {
          $push: {
            orders: {
              products,
              subtotal,
              shipping,
              total,
            },
          },
        },
        { new: true }
      );
      return successResponse(res, {
        statusCode: 200,
        message: "Order Successfully Completed",
        payload: result,
      });
    }
  } catch (error) {
    next(error);
  }
};

const handleAllGetOrders = async (req, res, next) => {
  try {
    const getAllOrder = await Orders.find({}).lean();

    if (getAllOrder.length > 0) {
      return successResponse(res, {
        statusCode: 200,
        message: "Orders Successfully Return",
        payload: getAllOrder,
      });
    } else {
      res.status(404).json({ error: "No Orders yet" });
    }
  } catch (error) {
    next(error);
  }
};

const handleGetOrders = async (req, res, next) => {
  const userPhone = req.query.phone;
  console.log(userPhone);

  try {
    const result = await Orders.findOne({ userPhone });
    if (!result) {
      return res.status(404).json({ error: "User not found " });
    }

    if (result?.orders?.length > 0) {
      return successResponse(res, {
        statusCode: 200,
        message: "Order Successfully Places",
        payload: result,
      });
    } else {
      res.status(404).json({ error: "User don't have a order" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { handleNewOrders, handleGetOrders, handleAllGetOrders };
