const { mongoose, Schema } = require("mongoose");

const ordersSchema = new Schema({
  userPhone: {
    type: String,
  },
  userInfo: {},
  orders: [
    {
      id: Schema.Types.ObjectId,
      products: [],
      subtotal: { type: Number },
      shipping: { type: Number },
      total: { type: Number },
      createdAt: { type: String },
    },
  ],
});

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;
