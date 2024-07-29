"use client";

import { logoutUser } from "@/redux/features/user/userSlice";
import Link from "next/link";
import logo from "@/assets/Food_Grain.png";

import { usePathname } from "next/navigation";
import { HiMenuAlt2 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const AdminNav = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const signOut = () => {
    dispatch(logoutUser());
  };
  const { user } = useSelector((state) => state?.user);
  const adminNavBarList = [
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Products",
      link: "/dashboard/products",
    },
    {
      title: "Orders",
      link: "/dashboard/orders",
    },
    {
      title: "Settings",
      link: "/dashboard/settings",
    },
  ];
  return (
//  <div className="">
     <div className="md:px-4 bg-slate-100">
      {/* small device */}
       <nav className="h-full md:max-w-[80%] mx-auto px-3 xl:px-0 py-2 flex md:hidden items-center justify-between gap-2">
         <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-full h-full" />
          </Link>
          
          <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6" />
       </nav>
       {/* large device */}
        <div className="my-2 hidden md:flex md:items-center">
          {user ? (
            <div className="flex flex-col justify-center gap-1 md:w-full">
            <span className="text-xl font-semibold hover:text-red-800">
              {user?.username}
            </span>
            <button
              className="py-1 px-3 border hover:text-white hover:bg-red-700"
              onClick={() => signOut()}
            >
              Log Out 🡪
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-1 md:w-full">
            <span>Not Signed In ....</span>
            <Link
              href={"/login"}
              className="text-center py-1 px-3 border hover:text-white hover:bg-red-700"
            >
              🡪 Log In
            </Link>
          </div>
        )}
      </div>

      <div className="hidden md:inline-flex md:flex-col items-start gap-2 min-h-full pt-2">
        {adminNavBarList.map((item, i) => (
          <Link
            key={i}
            href={item?.link}
            className={`flex hover:font-medium justify-center  items-center px-10 py-1 uppercase text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 duration-200 border-[1px] border-orange-200 w-full ${
              pathname === item?.link && "text-white font-bold bg-red-800"
            }`}
          >
            {item?.title}
          </Link>
        ))}
      </div>
    
    </div>
//  </div>
  );
};

export default AdminNav;
