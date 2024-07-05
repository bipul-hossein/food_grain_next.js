"use client";

import { logoutUser } from "@/redux/features/user/userSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

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
    <div className="md:px-4 bg-slate-100 ">
      <div className=" my-2">
        {user ? (
          <div className="flex flex-col justify-center gap-1">
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
          <div className="flex flex-col justify-center gap-1">
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
  );
};

export default AdminNav;
