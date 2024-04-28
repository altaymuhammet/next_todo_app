import React from "react";
import moment from "moment";
import Link from "next/link";
import { deleteTodo } from "../../lib/actions";
import { IoMdTimer, IoMdCheckmarkCircleOutline } from "react-icons/io";

const Todo = ({ todo, user }) => {
  const isTagExist = user.tags.find((tag) => tag === todo.tag);

  return (
    <li
      key={todo.id}
      className="w-full h-auto p-4 flex flex-col justify-between items-start gap-8 shadow-lg rounded-md border-2 overflow-hidden relative transition-all"
    >
      <div className="w-full flex flex-col gap-4">
        <div className="w-full h-auto flex justify-between items-start gap-4 border-b border-gray-600">
          <div className="flex gap-4">
            <h2 className={`font-semibold text-xl ${todo.category === "completed" && "line-through opacity-60"}`}>{todo.title.toUpperCase()}</h2>
            <span className="text-xl text-teal-500">
              {isTagExist ? `#${todo.tag}` : ""}
            </span>
          </div>
          <div className="flex gap-8">
            <span className={`font-semibold flex justify-center items-center gap-2 ${todo.category === "inprogress" ? "text-blue-500" : "text-teal-500"}`}>
              {todo.category === "inprogress" ? (
                <IoMdTimer />
              ) : (
                <IoMdCheckmarkCircleOutline />
              )}{" "}
              {todo.category}
            </span>
            <span>|</span>
            <span className="font-semibold">
              Deadline: {moment(todo.deadline).format("DD/MM/YYYY")}
            </span>
          </div>
        </div>
        <p className={`${todo.category === "completed" && "line-through opacity-60"}`}>
          {todo.description.length < 250
            ? todo.description
            : todo.description.slice(0, 250)}
          {todo.description.length > 249 ? "..." : ""}
        </p>
      </div>
      <div className="flex justify-start items-start gap-4">
        <Link
          href={`/dashboard/${todo.id}`}
          key={todo.id}
          className="w-full max-w-[200px] px-12 py-3 bg-teal-600 text-white text-lg text-center hover:bg-teal-500 rounded-md shadow-md"
        >
          Edit
        </Link>
        <form
          action={deleteTodo}
          className="w-full max-w-[200px] text-lg text-center"
        >
          <input type="hidden" name="username" value={user.username} />
          <input type="hidden" name="id" value={todo.id} />
          <button className="w-full px-12 py-3 flex justify-center items-center gap-3 text-white bg-red-600 hover:bg-red-500 rounded-md shadow-md cursor-pointer" type="submit">
            Delete
          </button>
        </form>
      </div>
    </li>
  );
};

export default Todo;
