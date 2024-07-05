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

    const now = new Date();
    // const option = { dateStyle: "full" };
    const options = {
      timeStyle: "short",
      hour12: true,
      dateStyle: "full",
    };
    // const formatDate = new Intl.DateTimeFormat("en-GB", option).format(now);

    const formatTimeNotUgly = new Intl.DateTimeFormat("en-GB", options).format(
      now
    );
    const time_date = formatTimeNotUgly;
    console.log(formatTimeNotUgly);

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
          createdAt: time_date,
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
              createdAt: time_date,
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

const handleGetOrder = async (req, res, next) => {
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

const handleGetOrderById = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  try {
    const result = await Orders.findOne({ _id: id });
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

module.exports = {
  handleNewOrders,
  handleGetOrder,
  handleGetOrderById,
  handleAllGetOrders,
};
