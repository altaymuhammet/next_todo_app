import React from "react";
import Link from "next/link";
import { MdAdd } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { deleteTag } from "@/app/lib/actions";
import { UserButton } from "@clerk/nextjs";

const Sidebar = ({ userInfo }) => {
  const todoListItems = [
    {
      text: "All Todos",
      name: "all",
      bordercolor: "border-gray-500",
      hoverbgcolor: "hover:bg-gray-400",
      bgcolor: "bg-gray-500",
    },
    {
      text: "In Progress Todos",
      name: "inprogress",
      bordercolor: "border-sky-500",
      hoverbgcolor: "hover:bg-sky-400",
      bgcolor: "bg-sky-500",
    },
    {
      text: "Completed Todos",
      name: "completed",
      bordercolor: "border-teal-500",
      hoverbgcolor: "hover:bg-teal-400",
      bgcolor: "bg-teal-500",
    },
  ];

  return (
    <div className="w-full h-auto p-4 shadow-lg rounded-lg bg-white border border-gray-600 relative flex flex-col ">
      <div className="w-full flex flex-col gap-12">
        <div className="w-full flex justify-start items-center gap-4 font-semibold">
          <UserButton />
          <span>{userInfo?.name}</span>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="w-full border-b-2 border-gray-500">
            <span className="font-semibold text-xl">Lists</span>
          </div>
          <ul className="w-full flex flex-col justify-start items-start gap-2">
            {todoListItems.map((item, i) => (
              <Link
                href={`/dashboard/${
                  item.name === "all"
                    ? ""
                    : item.name === "inprogress"
                    ? "inprogress"
                    : "completed"
                }`}
                className="w-full"
              >
                <li key={i} className="w-full flex justify-start items-center">
                  <button
                    className={`w-full  p-2 rounded-md flex justify-start items-center ${item.hoverbgcolor} ${item.bgcolor} text-white`}
                  >
                    {item.text}
                  </button>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="w-full flex justify-between items-center border-b border-gray-500">
            <span className="font-semibold text-xl">Tags</span>
            <Link
              href="/dashboard/newtag"
              className="w-auto flex justify-center items-center gap-1 text-2xl rounded-full transition-all"
            >
              <MdAdd
                className={`hover:border-2 border-gray-600 rounded-full `}
              />
            </Link>
          </div>
          <ul className="w-full flex flex-wrap justify-start items-start gap-4 mb-24">
            {userInfo?.tags.map((tag, i) => (
              <li
                key={i}
                className="max-w-50 flex justify-start items-center relative"
              >
                <form
                  action={deleteTag}
                  className="absolute -right-2 -top-2 hover:scale-125 transition-all z-50"
                >
                  <input type="hidden" name="deletedTag" value={tag.trim()} />
                  <button type="submit" className="text-xl">
                    <IoIosCloseCircle />
                  </button>
                </form>
                <button className="w-full border px-4 py-2 rounded-md flex justify-start items-center italic font-semibold hover:shadow-md transition-all">
                  #{tag.trim()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
