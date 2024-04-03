"use client";

import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "@/contexts/AuthProvider";
import { useContext } from "react";
const page = () => {
  const googleSignUp = useContext(AuthContext);
  console.log(googleSignUp);

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((result) => {
        // toast.success("Google Login Successfully.");
        // saveUser(result.user.displayName, result.user.email);
        // setCreatedUserEmail(result.user.email);
        console.log("singup successfully");
      })
      .catch((error) => {
        console.error(error);
        // toast.error("Google Login Unsuccess.");
      });
  };

  return (
    <div className="flex justify-center min-h-screen">
      <span className="mt-[20%] ">
        <button
          onClick={handleGoogleSignUp}
          className="flex items-center gap-2 w-full uppercase md:text-xl bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
        >
          CONTINUE WITH GOOGLE <FaGoogle />
        </button>
      </span>
    </div>
  );
};

export default page;
