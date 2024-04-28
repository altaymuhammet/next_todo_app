import Link from "next/link";
import React from "react";
import { findUser, createNewUser } from "../lib/actions";
import Todo from "../ui/dashboard/Todo";
import { currentUser } from "@clerk/nextjs";

const Dasboard = async () => {
  const authUser = await currentUser();
  const newUserInfo = {
    id: authUser.id,
    name: authUser.firstName + " " + authUser.lastName,
    username: authUser.emailAddresses[0].emailAddress,
    email: authUser.emailAddresses[0].emailAddress,
    img: authUser.imageUrl,
    todos: [],
    tags: ["Friends", "Family", "Shopping"],
  };
  const user = await findUser(newUserInfo.username);

  if(user) {
    return (
      <div className="w-full p-4 flex flex-col justify-start items-start">
        <div className="w-full pb-8 border-b-2 border-gray-600">
          <Link
            href="/dashboard/newtodo"
            className="px-12 py-3 bg-teal-500 text-white text-lg hover:bg-teal-600 rounded-md shadow-md"
          >
            Add New Todo
          </Link>
        </div>
        <div className="w-full py-12 flex flex-col justify-start items-start gap-8">
          <h3 className="text-3xl font-semibold underline">Your Todos</h3>
          <ul className="w-full flex justify-start items-start flex-wrap gap-8">
            {user.todos.length === 0 && <p>Add a new todo!</p>}
            {user.todos.map((todo) => (
              <Todo key={todo.id} todo={todo} user={user} />
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    const newUser = await createNewUser(newUserInfo);
    return (
      <div className="w-full p-4 flex flex-col justify-start items-start">
        <div className="w-full pb-8 border-b-2 border-gray-600">
          <Link
            href="/dashboard/newtodo"
            className="px-12 py-3 bg-teal-500 text-white text-lg hover:bg-teal-600 rounded-md shadow-md"
          >
            Add New Todo
          </Link>
        </div>
        <div className="w-full py-12 flex flex-col justify-start items-start gap-8">
          <h3 className="text-3xl font-semibold underline">Your Todos</h3>
          <ul className="w-full flex justify-start items-start flex-wrap gap-8">
            {newUser?.todos.length === 0 && <p>Add a new todo!</p>}
            {newUser?.todos.map((todo) => (
              <Todo todo={todo} user={newUser} key={todo.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }



};

export default Dasboard;
