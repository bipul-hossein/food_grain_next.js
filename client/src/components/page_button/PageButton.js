"use client";
import { RiShoppingCart2Fill } from "react-icons/ri";
import Link from "next/link";
import { useSelector } from "react-redux";

const PageButton = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <div className="fixed top-60 right-2 z-20 flex flex-col gap-2">
      <Link
        href={"/cart"}
        className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"
      >
        <div className="flex justify-center items-center">
          <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
        </div>
        <p className="text-xs font-semibold">Buy Now</p>
        <p className="absolute top-1 right-2 bg-primeColor text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
          {products ? products.length : 0}
        </p>
      </Link>
    </div>
  );
};

export default PageButton;
