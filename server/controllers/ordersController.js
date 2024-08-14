const mongoose = require('mongoose');
const sequence  = require('mongoose-sequence')(mongoose);
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
  //  const sq = Orders.plugin(sequence, { inc_field: 'orderNO' });

    const formatTimeNotUgly = new Intl.DateTimeFormat("en-GB", options).format(
      now
    );
    const time_date = formatTimeNotUgly;

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

// handle get order by all orders in a single user
const handleGetOrderById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const getAllOrder = await Orders.find({});
    console.log(getAllOrder);
    // const result = await Orders.findOne({ _id: id });
    const userOrders = await Orders.findOne({ _id: id });



    if (!userOrders) {
      return res.status(404).json({ error: "User not found " });
    }

    if (userOrders?.orders?.length > 0) {
      return successResponse(res, {
        statusCode: 200,
        message: "Order return Successfully",
        payload: getAllOrder,
      });
    } else {
      res.status(404).json({ error: "User don't have a order" });
    }
  } catch (error) {
    next(error);
  }
};

// handle get order by requesting order and related other orders in a single user
const handleGetOrderRelated = async (req, res, next) => {
  
  try {
    const { id } = req.params;
    const orderId = req.body.orderId;	
    // const orderId = req.params;
    const userOrders = await Orders.findOne({ _id: id });
 
const singleOrder = userOrders?.orders?.find(item=>console.log(item))
res.json(userOrders?.orders[0]);

    // Find the order with the specified orderId
    // const order = await Orders.findOne({ orderId:id }).exec();
    // const getAllOrder = await Orders.find({});
    // // const result = await Orders.findOne({ _id: id });
    // const userOrders = await Orders.findOne({ _id: id });


    // const orderId = req.params.orderId; // Extract the order ID from the route parameter

    // Find comments associated with the given order ID
    // const userOrders = await Orders.findOne({ orderId: id }).exec();



    // if (!userOrders) {
    //   return res.status(404).json({ error: "User not found " });
    // }

    // // if (userOrders?.orders?.length > 0)
    // if (userOrders)
       {
      return successResponse(res, {
        statusCode: 200,
        message: "Order return Successfully",
        payload: userOrders,
      });
    // } else {
      // res.status(404).json({ error: "User don't have a order" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleNewOrders,
  handleGetOrder,
  handleGetOrderById,
  handleGetOrderRelated,
  handleAllGetOrders,
};
