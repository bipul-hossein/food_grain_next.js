"use client";
import EmptyProductMessage from "@/components/cart_components/EmptyProductMessage";
import SingleProduct from "@/components/cart_components/SingleProduct";
import { calculateTotals, resetCart } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const {
    products,
    totalQuantity,
    totalAmount = [0],
  } = useSelector((state) => state?.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products]);

  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-8">
      <h3 className="text-2xl font-bold text-gray-800">Your Cart</h3>
      {products?.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8 mt-4">
          <div className="md:col-span-2 space-y-4">
            {products?.map((product, i) => (
              <SingleProduct key={i} product={product} />
            ))}
            <div>
              <div className="flex justify-between my-3">
                <button
                  className="text-sm px-4 py-2.5 font-semibold tracking-wide text-black bg-transparent border border-gray-300 hover:bg-gray-900 hover:text-white rounded-sm uppercase"
                  onClick={() => dispatch(resetCart())}
                >
                  Clear Cart
                </button>
                <span className="text-ends">Total= {totalAmount}</span>
              </div>
            </div>
          </div>
          {/* order summary */}
          <div class="bg-gray-100 rounded-sm p-4 h-max">
            <h3 class="text-lg font-bold text-gray-800 border-b border-gray-300 pb-2">
              Order Summary
            </h3>
            <ul class="text-gray-800 mt-4 space-y-2">
              <li class="flex flex-wrap gap-4 text-sm">
                Subtotal <span class="ml-auto font-bold">{totalAmount}</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Shipping <span class="ml-auto font-bold">100</span>
              </li>
              <hr class="border-gray-300" />
              <li class="flex flex-wrap gap-4 text-sm font-bold">
                Total <span class="ml-auto">{totalAmount + 100}</span>
              </li>
            </ul>

            <div class="mt-4 space-y-2">
              <Link
                style={{ display: "inline-block" }}
                href={"/checkout"}
                class="text-sm text-center px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-sm"
              >
                Checkout
              </Link>
              <Link
                style={{ display: "inline-block" }}
                href={"/shop"}
                type="button"
                class="text-sm px-4 py-2.5 w-full text-center font-semibold tracking-wide text-gray-800 bg-transparent hover:bg-gray-900 hover:text-white border border-gray-300 rounded-sm"
              >
                Continue Shopping{" "}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <EmptyProductMessage />
      )}
    </div>
  );
};

export default CartPage;
