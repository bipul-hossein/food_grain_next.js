"use client";

import { loginUser } from "@/utils/actions/loginUser";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserLoginInfo } from "@/redux/features/user/userSlice";
import toast from "react-hot-toast";
// import { setUserLoginInfo } from "@/redux/features/user/userSlice";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userId = form.userId.value;
    const username = form.username.value;
    const password = form.password.value;
    console.log(userId, username, password);
    const data = { userId, username, password };
    try {
      const res = await loginUser(data);
      console.log(res);
      if (res.success) {
        toast.success(res.message);
        // console.log(res, "login page");
        const decoded = jwtDecode(res.payload);
        dispatch(setUserLoginInfo(decoded));
        // console.log(decoded);
        localStorage.setItem("accessToken", res.payload);
        router.push("/dashboard");
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.error(err.message);
      toast.error(res.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Login <span className="text-accent">Here</span>
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
            width={500}
            height={200}
            alt="login page"
            className="w-full h-[85%]"
          />
        </div>

        <div className="card w-[70%] h-[80%] shadow-xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body ml-2">
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text">user id</span>
              </label>
              <input
                type="text"
                placeholder="userId"
                className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                required
                name="userId"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                required
                name="username"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                required
                name="password"
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent btn-outline">
                Login
              </button>
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link className="text-accent underline" href="/register">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
