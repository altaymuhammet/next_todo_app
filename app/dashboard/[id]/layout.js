import React from "react";
import { findUser } from "@/app/lib/actions";
import moment from "moment";
import { currentUser } from "@clerk/nextjs";

const SingleTodoLayout = async ({ children, params }) => {
  const { id } = params;
  const authUser = await currentUser();
  const user = await findUser(authUser.emailAddresses[0].emailAddress);
  const currentTodo = user.todos.filter((todo) => todo.id === id);
  const formattedDate = moment(currentTodo[0].deadline).format("DD/MM/YYYY");

  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="w-full mb-8 p-8 flex flex-col justify-start items-start gap-8 border border-gray-400 rounded-md shadow-lg">
        <div className="w-full flex justify-between items-center border-b-2 border-gray-600 p-4">
          <div className="flex justify-start items-start gap-4">
            <h1 className="text-3xl font-semibold">{currentTodo[0].title}</h1>
            <span className="text-3xl text-teal-500">
              #{currentTodo[0].tag}
            </span>
          </div>
          <h2 className="text-xl font-semibold">Deadline: {formattedDate}</h2>
        </div>
        <p className="text-lg">{currentTodo[0].description}</p>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default SingleTodoLayout;
