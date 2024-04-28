import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

const SignupForm = () => {
  return (
    <div className="w-50 flex flex-col justify-center items-start gap-4">
      <h1 className="text-4xl font-bold">Signup</h1>
      <div className="w-full min-w-[400px] min-h-[400px] p-6 border-2 border-gray-600 rounded-xl shadow-xl flex flex-col gap-8">
        <form className="w-full min-w-[400px] flex flex-col justify-start items-start gap-8">
          <div className="w-full">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full p-4 mt-3 border-2 border-gray-600 rounded-md"
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full p-4 mt-3 border-2 border-gray-600 rounded-md"
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="font-semibold">
              Password again
            </label>
            <input
              name="password"
              type="password"
              className="w-full p-4 mt-3 border-2 border-gray-600 rounded-md"
            />
          </div>
          <button className="w-full flex justify-center items-center bg-teal-600 text-white text-lg py-4 rounded-md hover:bg-teal-500">
            Signup
          </button>
        </form>
        <Link
          href="./"
          className="text-gray-600 font-semibold hover:underline"
        >
          Go to Login Page
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
