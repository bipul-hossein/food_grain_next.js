const slugify = require("slugify");
const Product = require("../models/productModel");
const { successResponse } = require("./responseController");

const handleCreateProduct = async (req, res, next) => {
  try {
    const { title, url_title, image, price, weight, description } = req.body;
    // console.log(title, image, price, weight, description);
    const exitingProduct = await Product.findOne({ title: title });
    // console.log(url_title, " 4654 629");
    if (!exitingProduct) {
      const newProduct = await Product.create({
        title,
        slug: slugify(url_title),
        image,
        price,
        weight,
        description,
      });

      return successResponse(res, {
        statusCode: 200,
        message: "Product was created successfully",
        payload: newProduct,
      });
    } else {
      return errorResponse(res, {
        statusCode: 500,
        message: "A product under this name has already been created.",
      });
    }
  } catch (error) {
    next(error);
  }
};

const handleUpdateProduct = async (req, res, next) => {
  try {
    const { title, url_title, image, price, weight, description } = req.body;
    // console.log(title, url_title, image, price, weight, description);
    const { id } = req.params;
    // console.log(id);
    const filter = { slug: id };
    const updates = {
      $set: {
        title,
        slug: slugify(url_title),
        image,
        price,
        weight,
        description,
      },
    };
    const option = {
      new: true,
    };
    const updateProduct = await Product.findOneAndUpdate(
      filter,
      updates,
      option
    );

    if (!updateProduct) {
      throw createError(404, "Product not found");
    }

    return successResponse(res, {
      statusCode: 200,
      message: "Product was updated successfully",
      payload: updateProduct,
    });
  } catch (error) {
    next(error);
  }
};

const handleGetProducts = async (req, res, next) => {
  try {
    const getProducts = await Product.find({}).lean();
    // console.log(getProducts);

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
    const getProduct = await Product.findOne({ slug: id }).lean();
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

const handleDeleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findOneAndDelete({ slug: id });
    // console.log(id, "hit");
    if (!deleteProduct) {
      throw createError(404, "Product not found");
    }
    return successResponse(res, {
      statusCode: 200,
      message: "Product was Deleted successfully",
      payload: deleteProduct,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  handleGetProducts,
  handleGetSingleProduct,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
};
