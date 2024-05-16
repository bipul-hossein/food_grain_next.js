"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// import { ProductContext } from "../../../contexts/ProductsProvider";

const Card = ({ data, icon }) => {
  // console.log(data);

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
          <Link href={`product/${data?.slug}`}>
            <Image
              src={data?.image}
              alt="product image"
              width={700}
              height={700}
              className="w-72 h-72 object-contain"
            />
          </Link>
          {/* <img
            className="aspect-square w-full min-h-[210px] group-hover:scale-110 duration-700 ease-in-out"
            src={data?.image}
            alt=""
            loading="lazy"
          /> */}
        </div>
      </div>
      <Link href={`product/${data?.slug}`}>
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
        {/* <span className="ml-2 text-xs md:text-sm text-[#132a36] opacity-50  line-through pl-1">
        ৳354
      </span> */}
      </div>
      <button
      // disabled={findCartItem}
      // onClick={() => handleAddToLocalStorage(data)}
      // className={`py-[4px] md:py-[8px] px-[8px] md:px-[14px] text-[13px] md:text-sm rounded-[4px] md:rounded-md text-white duration-500 ${
      //   findCartItem ? "bg-gray-600" : "bg-primary hover:bg-[#fa6602]"
      // }`}
      >
        {/* {findCartItem ? "Added" : "Add to Cart"} */}
      </button>
    </div>
  );
};

export default Card;
