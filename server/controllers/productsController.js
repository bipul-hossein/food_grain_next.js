const Product = require("../models/productModel");
const { successResponse } = require("./responseController");

const handleGetProducts = async (req, res, next) => {
  try {
    const getProducts = await Product.find({}).lean();

    return successResponse(res, {
      statusCode: 200,
      message: "Products return successfully",
      payload: getProducts,
    });
  } catch (error) {
    next(error);
  }
};

const handleGetSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getProduct = await Product.findOne({ url_title: id }).lean();
    // console.log(getProduct);
    return successResponse(res, {
      statusCode: 200,
      message: "Product return success",
      payload: getProduct,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleGetProducts,
  handleGetSingleProduct,
};
