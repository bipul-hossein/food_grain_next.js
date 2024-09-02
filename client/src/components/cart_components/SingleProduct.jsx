import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 max-sm:w-20 max-sm:h-20 shrink-0 bg-gray-100 p-1 rounded-sm">
          <Image
            src={product?.image}
            alt="product image"
            width={200}
            height={200}
            priority={true}
            className="w-full object-contain md:aspect-square"
          />
        </div>

        <div className="w-full">
          <h3 className="text-base font-semibold text-gray-800">
            {product?.title}
          </h3>
          <h6 className="flex justify-between text-sm text-gray-800 font-bold cursor-pointer mt-0.5">
            <p>
              {product?.price} X {product?.quantity}
            </p>
            <span className="flex">
              <p>sub: </p>
              <p>{product?.price * product?.quantity}</p>
            </span>
          </h6>

          <div className="flex gap-4 mt-4">
            <span
              className="text-sm text-blue-500 underline hover:cursor-pointer"
              onClick={() => dispatch(deleteItem(product))}
            >
              remove
            </span>

            <div className="ml-auto">
              <button
                type="button"
                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                <span
                  onClick={() => dispatch(decreaseQuantity(product))}
                  className=""
                >
                  <FaMinus />
                </span>
                <span className="mx-2.5">{product?.quantity}</span>
                <span
                  onClick={() => dispatch(increaseQuantity(product))}
                  className=""
                >
                  <FaPlus />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};

export default SingleProduct;
