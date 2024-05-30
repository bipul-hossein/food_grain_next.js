// import Image from "next/image";
// import logo from "../../../public/Food_Grain.png";

// const Navbar = () => {
//   return (
//     <div className=" w-full bg-white">
//       {/* // <!-- component --> */}
//       <header className=" md:w-10/12 mx-auto">
//         <div className="container mx-auto px-4 py-2 md:py-8 flex  justify-between items-center">
//           {/* <!-- logo --> */}
//           <div className="mr-auto md:w-48 flex-shrink-0">
//             <Image className="" src={logo} alt="" />
//           </div>

//           {/* <!-- search --> */}
//           <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
//             <input
//               className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 py-3"
//               type="text"
//               placeholder="I'm searching for ..."
//             />
//           </div>

//           {/* <!-- phone number --> */}
//           <div className="ml-auto md:w-48 flex flex-col place-items-end">
//             <span className="font-bold md:text-xl">01401-918242</span>
//             <span className="font-semibold text-sm text-gray-400">
//               Support 24/7
//             </span>
//           </div>
//         </div>
//         <hr />
//       </header>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Food_Grain.png";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import { usePathname } from "next/navigation";
// import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  // const { data: session } = useSession();

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
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 sticky top-0 z-50">
      <nav className="h-full md:max-w-[80%] mx-auto px-3 xl:px-0 flex items-center justify-between gap-2">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-full h-full" />
        </Link>
        <div className="relative w-full hidden lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-6 rounded-md">
          <input
            type="text"
            placeholder="Search your products here"
            className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          {searchQuery ? (
            <IoCloseOutline
              onClick={() => setSearchQuery("")}
              className="w-5 h-5 hover:text-red-500 duration-200 hover:cursor-pointer"
            />
          ) : (
            <FaSearch className="w-5 h-5 hover:cursor-pointer" />
          )}
        </div>
        <div className="hidden md:inline-flex items-center gap-2">
          {navBarList.map((item, i) => (
            <Link
              href={item?.link}
              key={i}
              className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-400 duration-200 last:border-r-0 ${
                pathname === item?.link && "text-gray-950 underline"
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
        <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6" />
      </nav>
    </div>
  );
};

export default Navbar;
