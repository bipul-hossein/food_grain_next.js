"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Food_Grain.png";
import { HiMenuAlt2, HiOutlineShoppingBag } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Search from "../search/Search";
import { Suspense } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { products } = useSelector((state) => state.cart);

  const navBarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Cart",
      link: "/cart",
    },
  ];

  return (
    <>
      <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 sticky top-0 z-50">
        <nav className="h-full md:max-w-[80%] mx-auto xl:px-0 flex items-center justify-between gap-2">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-full h-full" priority />
          </Link>
          {/* search field start*/}
          <Suspense>
            <Search />
          </Suspense>
          {/* search field end*/}
          <div className="hidden md:inline-flex items-center gap-2">
            {navBarList.map((item, i) => (
              <Link
                href={item?.link}
                key={i}
                className={`flex hover:font-medium w-20 h-6 justify-center items-center text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-400 duration-200 last:border-r-0 ${pathname === item?.link && "text-gray-950 underline"
                  }`}
              >
                {item?.title}
              </Link>
            ))}
            {/* {session?.user && (
            <button
              // onClick={() => signOut()}
              className="flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-red-600 md:border-r-[2px] border-r-gray-300 duration-200 last:border-r-0"
            >
              Logout
            </button>
          )} */}
            {/* try to update */}
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link
              href={"/cart"}
              className="inline-flex md:hidden cursor-pointer relative"
            >
              <HiOutlineShoppingBag className="text-2xl " />
              <p className="absolute top-[1px] right-[17px] bg-primeColor text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold bg-orange-300 text-black">
                {products ? products.length : 0}
              </p>
            </Link>
            <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6" />
          </div>
        </nav>
      </div>
      {/* <SearchResultList className=".search-box__popup--3Pf1" results={results} /> */}
    </>
  );
};

export default Navbar;
