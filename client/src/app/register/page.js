"use client";

import { registerUser } from "@/utils/actions/registerUser";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userFullName = form.userfullname.value;
    const userid = form.userid.value;
    const username = form.username.value;
    const password = form.password.value;
    console.log(userid, username, password);
    const data = { userFullName, userid, username, password };
    try {
      const res = await registerUser(data);
      if (res.success) {
        alert(res.message);
        router.push("/login");
      }
    } catch (err) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Register <span className="text-accent">Here</span>
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1710081713~exp=1710085313~hmac=f637c194f1f143e63a84950cbf978997453777c872adf4aebbbecdaa445601a1&w=740"
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
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                required
                name="userfullname"
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text">user id</span>
              </label>
              <input
                type="text"
                placeholder="userid"
                className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                required
                name="userid"
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
                Register
              </button>
            </div>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-accent underline" href="/login">
                Please Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
