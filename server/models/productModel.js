const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  title: {
    type: String,
    trim: true,
    require: true,
  },
  url_title: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  image: {
    type: String,
    trim: true,
    require: true,
  },
  price: {
    type: Number,
    trim: true,
    require: true,
  },
  weight: {
    type: String,
    trim: true,
    // require: true,
  },
  description: {
    type: String,
    trim: true,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
