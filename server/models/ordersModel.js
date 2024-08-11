const { mongoose, Schema } = require("mongoose");

const ordersSchema = new Schema({
  userPhone: {
    type: String,
  },
  userInfo: {},
  orders: [
    {
      orderNO: { type: String },                                  
      id: Schema.Types.ObjectId,
      status: {
        type: String,
        require: true,
        default:"not_verified"
        
      },
      products: [],
      subtotal: { type: Number },
      shipping: { type: Number },
      total: { type: Number },
      createdAt: { type: String },
    },
  ],
});

const Orders = mongoose.model("orderlists", ordersSchema);
module.exports = Orders;
