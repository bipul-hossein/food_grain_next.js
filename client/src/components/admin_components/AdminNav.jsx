"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const pathname = usePathname();
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
      <div className="hidden md:inline-flex md:flex-col items-start gap-2 min-h-full pt-10">
        {adminNavBarList.map((item, i) => (
          <Link
            key={i}
            href={item?.link}
            className={`flex hover:font-medium justify-center  items-center px-10 py-1 uppercase text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 duration-200 border-[1px] border-orange-200 w-full   ${
              pathname === item?.link && "text-gray-950 underline"
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
