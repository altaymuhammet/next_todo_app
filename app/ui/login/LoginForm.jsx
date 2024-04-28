import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  return (
    <div className="w-50 flex flex-col justify-center items-start gap-4">
      <h1 className="text-4xl font-bold">Login</h1>
      <div className="w-full min-w-[400px] min-h-[400px] p-6 border-2 border-gray-600 rounded-xl shadow-xl flex flex-col gap-8">
        <form className="w-full min-w-[400px] flex flex-col justify-start items-start gap-8">
          <div className="w-full">
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              name="username"
              type="text"
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
          <button className="w-full flex justify-center items-center bg-teal-600 text-white text-lg py-4 rounded-md hover:bg-teal-500">
            Login
          </button>
        </form>
        <hr />
        <button className="w-full flex justify-center items-center bg-white py-4 rounded-md border-2 border-gray-600 text-xl hover:shadow-lg">
          <FcGoogle />
        </button>
        <div className="w-50">
          <Link href="./signup" className="text-gray-600 font-semibold hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
