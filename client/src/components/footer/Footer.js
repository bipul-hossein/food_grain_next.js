"use client";
// components/Footer.js
import logo from "@/assets/Food_Grain.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="mx-3 md:max-w-[80%] md:mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-12">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                <div className="lg:col-span-4 md:col-span-12">
                  <Link href="#" className="text-2xl focus:outline-none">
                    <Image
                      className="h-12 w-auto"
                      src={logo}
                      alt="Brand Name"
                    />
                  </Link>
                  <p className="mt-6 text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul className="flex mt-6 space-x-2">
                    {/* Social Icons - Repeat for each icon */}
                  </ul>
                </div>

                <div className="lg:col-span-2 md:col-span-4">
                  <h5 className="text-gray-100 font-semibold">Company</h5>
                  <ul className="mt-6 space-y-2.5">
                    {/* Repeat for each item */}
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="text-gray-100 font-semibold">
                    Important Links
                  </h5>
                  <ul className="mt-6 space-y-2.5">
                    {/* Repeat for each item */}
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="text-gray-100 font-semibold">Newsletter</h5>
                  <p className="mt-6">
                    Sign up and receive the latest tips via email.
                  </p>
                  <form className="mt-4">
                    <div className="flex flex-col space-y-3">
                      <label className="block">
                        Write your email <span className="text-red-600">*</span>
                        <input
                          type="email"
                          className="mt-1 w-full py-2 px-3 rounded text-gray-100 bg-transparent border border-gray-800 focus:border-gray-800"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </label>
                      <button
                        type="submit"
                        className="py-2 px-5 font-semibold tracking-wide text-base text-black bg-yellow-500 border-yellow-600 rounded-md"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-7 border-t border-gray-800">
        <div className="max-w-[80%] mx-auto text-center">
          <div className="grid md:grid-cols-2 items-center">
            <div className="md:text-left">
              <p className="mb-0">&copy; Food Grain</p>
            </div>
            {/* Add any other element here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
