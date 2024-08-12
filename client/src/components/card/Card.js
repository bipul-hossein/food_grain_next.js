"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ data, icon }) => {
  // console.log(data);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state?.cart);

  const findCartItem = products?.find((item) => item?._id === data?._id);

  return (
    <div className="group flex flex-col rounded-md justify-between w-full bg-white p-2 md:p-4 border-[1px] hover:border-[#fa6602] relative ">
      <div className="mx-auto">
        {icon === "new" && (
          <div className="absolute rounded-full right-1 md:right-2 top-1 md:top-2 md:uppercase bg-[#fed700] z-10">
            <p className="text-black text-xs md:font-bold py-[6px] md:py-3 px-[2px] md:px-1 ">
              {icon}
            </p>
          </div>
        )}
        {icon === "hot" && (
          <div className="absolute rounded-full right-1 md:right-2 top-1 md:top-2 md:uppercase bg-red-500 z-10">
            <p className="text-white text-xs md:font-bold py-[6px] md:py-3 px-[2px] md:px-2 ">
              {icon}
            </p>
          </div>
        )}

        <div
          //   onClick={() => handleNavigate(data)}
          className="hover:cursor-pointer overflow-hidden rounded-sm flex justify-center"
        >
          <Link href={`product/${data?.url_title}`}>
            <Image
              src={data?.image}
              alt="product image"
              width={700}
              height={700}
              priority={false}
              className="w-72 object-contain md:aspect-square"
            />
          </Link>
        </div>
      </div>
      <Link href={`product/${data?.url_title}`}>
        <h2
          // onClick={() => handleNavigate(data)}
          className="hover:cursor-pointer text-sm md:text-base font-medium md:font-semibold md:tracking-[-.2px] mt-2"
        >
          {data?.title}
        </h2>
      </Link>
      <div className="my-2 ">
        <span className="text-xs md:text-sm whitespace-no-wrap text-[#fa6602] leading-6 font-bold">
          ৳{data?.price} tk
        </span>
      </div>
      <button
        // className="btn"
        onClick={() => dispatch(addToCart({ ...data, quantity: 1 }))}
        disabled={findCartItem?.findCartItem}
        className={`py-[4px] md:py-[8px] px-[8px] md:px-[14px] text-[13px] md:text-sm rounded-[4px] md:rounded-md text-white duration-500 ${
          findCartItem ? "bg-gray-600" : "bg-blue-700 hover:bg-[#fa6602]"
        }`}
      >
        {findCartItem ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Card;
