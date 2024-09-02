const slugify = require("slugify");
const Product = require("../models/productModel");
const { successResponse, errorResponse } = require("./responseController");
const { Types, isValidObjectId } = require("mongoose");


const handleCreateProduct = async (req, res, next) => {
  try {
    const { title, url_title, image, price, weight, description } = req.body;
    console.log(title, url_title, image, price, weight, description);
    const exitingProduct = await Product.findOne({ url_title: url_title });
    if (!exitingProduct) {
      // console.log("lksajdflksajflkasdj");
      const newProduct = await Product.create({
        title,
        url_title: slugify(url_title),
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


// hitting the url link this 
// api/search?q=oil&limit=5
const handleGetSearchProducts = async (req, res, next) => {
  try {
    const searchQuery = req.query.q
    const limit = parseInt(req.query.limit)

    if (!searchQuery) {
      // Handle the case where no search query is provided
      return errorResponse(res, {
        statusCode: 400,
        message: 'Please provide a valid search query.',
      });
    }

    const searchRegExp = new RegExp('.*'+ searchQuery+ '.*' , 'i', 'g')
        filterProducts = await Product.find({
            "$or" : [
                {
                  title : searchRegExp
                },
                {
                  url_title : searchRegExp
                }
            ]
        }).limit(limit)
    if(filterProducts.length){
      return successResponse(res, {
        statusCode: 200,
        message: "Products return successfully",
        payload: filterProducts,
      });
    }else{
      return errorResponse(res, {
        statusCode: 404,
        message: "Product Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const handleGetSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getProduct = await Product.findOne({
      $or: [
      { _id: isValidObjectId(id) ? new Types.ObjectId(id) : undefined },
      { url_title: id }
      ],
    }).lean();
    if (getProduct) {
      return successResponse(res, {
        statusCode: 200,
        message: "Product return success",
        payload: getProduct,
      });
    } else {
      return errorResponse(res, {
        statusCode: 500,
        message: "Product return failed",
      });
    }
  } catch (error) {
    next(error);
  }
};

const handleUpdateProduct = async (req, res, next) => {
  try {
    const { title, url_title, image, price, weight, description } = req.body;
    const { id } = req.params;
    const filter = { _id: id };
    const updates = {
      $set: {
        title,
        url_title: slugify(url_title),
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

const handleDeleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findOneAndDelete({ _id: id });
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
  handleGetSearchProducts
};
