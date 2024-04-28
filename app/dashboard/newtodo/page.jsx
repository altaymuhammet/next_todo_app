import React from "react";
import { addTodo, findUser } from "../../lib/actions";
import { currentUser } from "@clerk/nextjs";

const NewTodo = async () => {
  const authUser = await currentUser();
  const user = await findUser(authUser.emailAddresses[0].emailAddress);

  return (
    <>
      <form
        action={addTodo}
        className="w-full p-8 py-16 border border-gray-400 rounded-md shadow-lg flex flex-col justify-start items-start gap-8"
      >
        <div className="w-full flex justify-start items-start gap-8">
          <div className="w-1/2 flex flex-col justify-start items-start gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              required
              className="w-full p-4 rounded-md border border-gray-400"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-start items-start gap-2">
            <label htmlFor="deadline">Deadline</label>
            <input
              type="date"
              name="deadline"
              required
              className="w-full p-4 rounded-md border border-gray-400"
            />
          </div>
        </div>
        <div className="w-full flex justify-start items-start gap-8">
          <div className="w-1/2 flex flex-col justify-start items-start gap-2">
            <label htmlFor="tag">Tag</label>
            <select
              name="tag"
              id="tag"
              className="w-full p-5 rounded-md bg-white border border-gray-400"
            >
              {user.tags.map((tag, i) => (
                <option key={i} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2 flex flex-col justify-start items-start gap-2">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              required
              className="w-full p-5 rounded-md bg-white border border-gray-400"
            >
              <option value="inprogress">In progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            className="w-full min-h-[200px] p-4 rounded-md border border-gray-400"
          />
        </div>
        <button
          type="submit"
          className="px-12 py-3 bg-teal-500 text-white text-lg hover:bg-teal-600 rounded-md shadow-md"
        >
          Add New Todo
        </button>
      </form>
    </>
  );
};

export default NewTodo;
