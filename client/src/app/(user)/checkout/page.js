"use client";

import { calculateTotals } from "@/redux/features/cart/cartSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const {
    products,
    totalQuantity,
    totalAmount = [0],
  } = useSelector((state) => state?.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const thana = form.thana.value;
    const user_info = {
      userPhone: phone,
      fullName,
      address,
      thana,
      products,
      subtotal: totalAmount,
      shipping: 100,
      total: totalAmount + 100,
    };
    fetch(`${process.env.NEXT_PUBLIC_serverUrl}/order`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user_info),
    })
      .then((response) => response.json())
      .then(({ payload, message, success }) => {
        // console.log("Success:", payload);
        if (success) {
          form.reset();
        }
        toast.success(payload?.userInfo?.fullName + " Your " + message);
        // const newStudent = [...studentsData, data];
        // setStudentsData(newStudent)
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.success(error);
      });
  };

  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-8">
      <h3 className="text-2xl font-bold text-gray-800">Checkout</h3>
      <div className="grid md:grid-cols-3 gap-8 mt-4">
        <div className="md:col-span-2 space-y-4">
          <form id="checkoutForm" onSubmit={handleCheckout}>
            <div className="form-control w-full mt-3 mb-4">
              <span className="label-text">Full Name</span>
              <input
                required
                type="text"
                name="fullName"
                placeholder="Enter Your Full Name.."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="phone"
                name="phone"
                placeholder="Enter Your Phone Number.."
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <span className="label-text">Address</span>
              <textarea
                name="address"
                placeholder="Enter Your Address.."
                required
                className="bg-slate-100 w-full px-2 py-2 rounded border-[1px]  focus:outline-1 focus:outline-green-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <span className="label-text">Thana & District</span>
              <input
                type="text"
                name="thana"
                placeholder="Enter Your Thana (Police Station) & District.."
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </form>
        </div>
        {/* Your order */}
        <div className="bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-2">
            Your order
          </h3>
          <ul className="text-gray-800 mt-4 space-y-2">
            <li className="flex flex-wrap gap-4 text-sm font-semibold">
              Products
            </li>
            <hr className="border-gray-300" />
            {products.map((product, i) => (
              <span key={i} className="flex justify-between">
                <p className="text-xs md:text-sm ">{product?.title}</p>
                <p className="text-xs md:text-sm ">{product?.price}</p>
              </span>
            ))}
            <hr className="border-red-200" />
            <li className="flex flex-wrap gap-4 text-sm font-semibold">
              Subtotal <span className="ml-auto font-bold">{totalAmount}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm font-semibold">
              Shipping <span className="ml-auto font-bold">100</span>
            </li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              Total <span className="ml-auto">{totalAmount + 100}</span>
            </li>
          </ul>

          <div className="mt-4 space-y-2">
            <button
              form="checkoutForm"
              type="submit"
              className="text-sm text-center px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-sm uppercase"
            >
              place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
