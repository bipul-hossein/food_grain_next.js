"use client";
import React, { useState } from "react";

const ProductAdditionalInfo = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="flex border-b my-10">
        <p
          onClick={() => setActiveIndex(0)}
          className={`cursor-pointer text-gray-600 bg-secondary text-xs md:text-base text-center font-semibold p-2 border-l border-t rounded-l-md uppercase ${
            activeIndex === 0 ? "bg-blue-500 text-white underline " : ""
          }`}
        >
          DESCRIPTION
        </p>
        <p
          onClick={() => setActiveIndex(1)}
          className={`cursor-pointer text-gray-600 font-semibold p-2 text-xs md:text-base text-center border-r bg-secondary border-t rounded-r-md uppercase ${
            activeIndex === 1 ? "bg-blue-500 text-white underline " : ""
          }`}
        >
          Additional Information
        </p>
      </div>
      {/* Product Details section */}
      <div className={`${activeIndex === 0 ? "block" : "hidden"}`}>
        <div className={`${activeIndex === 0 ? "block" : "hidden"}`}>
          <h3 className="text-base font-bold my-3">Product Details</h3>
          <p className="text-sm  text-justify text-gray-500 leading-6">
            {product?.description}
          </p>
        </div>
      </div>
      {/* Product additional section */}
      <div className={`${activeIndex === 1 ? "block" : "hidden"}`}>
        <div className={`${activeIndex === 1 ? "block" : "hidden"}`}>
          <h3 className="text-base font-bold my-3">Additional Information</h3>
          <p className="text-base text-gray-500 leading-6">
            weight: {product?.weight}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductAdditionalInfo;
