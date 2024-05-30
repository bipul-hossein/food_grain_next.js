"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

// components/ProductInfo.js
const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevCount) => prevCount + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleAddToCartValue = () => {
    console.log(quantity);
  };

  return (
    <div className="md:w-[60%]">
      <h1 className="text-3xl font-bold mb-3 ">{product?.title}</h1>
      <p className="text-sm text-justify  text-gray-700 mb-4">
        {product?.description}
      </p>
      <div className="flex items-center">
        <span className="text-xl text-gray-600 mr-2">Price:</span>
        <span className="text-xl text-green-600 font-semibold">
          {product?.price}
        </span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-gray-600 text-base mr-2">Availability:</span>
        <span className="text-green-600 text-base font-semibold">In Stock</span>
      </div>

      <div>
        <div className="counter flex items-center text-2xl justify-start my-4">
          <div className="shadow-md flex">
            <span
              onClick={handleDecrease}
              className="bg-gray-100 text-black w-8 flex items-center justify-center rounded-l-lg cursor-pointer hover:bg-gray-300 border-[1px] border-gray-300 hover:border-gray-300"
            >
              <FiMinus />
            </span>
            <p className="w-8 flex items-center justify-center border-y-[1px] border-gray-300">
              {quantity}
            </p>
            <span
              onClick={handleIncrease}
              className="bg-gray-100 text-black w-8 flex items-center
              justify-center rounded-r-lg cursor-pointer hover:bg-gray-300 border-[1px] border-gray-300 hover:border-gray-300"
            >
              <FiPlus />
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={handleAddToCartValue}
        handleAddToCartValue
        className="uppercase md:text-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
