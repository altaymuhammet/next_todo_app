import React from "react";
import { findUser, updateTodo } from "@/app/lib/actions";
import { currentUser } from "@clerk/nextjs";

const TodoEditForm = async ({ id }) => {
  const authUser = await currentUser();
  const user = await findUser(authUser.emailAddresses[0].emailAddress);
  const currentTodo = user.todos.filter((todo) => todo.id === id);

  return (
    <form
      action={updateTodo}
      className="w-full flex flex-col justify-start items-start gap-8 mb-8 pt-12 p-8 border border-gray-400 rounded-md shadow-lg relative"
    >
      <div className="w-full flex justify-start items-start gap-8">
        <div className="w-1/2 flex flex-col justify-start items-start gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            required
            defaultValue={currentTodo[0].title}
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
          <label htmlFor="tags">Tag</label>
          <select
            name="tag"
            id="tag"
            defaultValue={currentTodo[0].tag}
            className="w-full p-5 rounded-md bg-white border border-gray-400"
          >
            {user.tags.map((tag, i) => (
              <option value={tag} key={i}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2 flex flex-col justify-start items-start gap-2">
          <label htmlFor="categories">Category</label>
          <select
            name="category"
            id="category"
            required
            defaultValue={currentTodo[0].category}
            className="w-full p-5 rounded-md bg-white border border-gray-400"
          >
            <option value="inprogress">In progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <label htmlFor="title">Description</label>
        <textarea
          type="text"
          name="description"
          defaultValue={currentTodo[0].description}
          className="w-full min-h-[200px] p-4 rounded-md border border-gray-400"
        />
      </div>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="w-[200px] flex justify-center items-center p-4 rounded-md hover:shadow-lg hover:scale-110 transition-all bg-emerald-400 text-white"
      >
        Update
      </button>
    </form>
  );
};

export default TodoEditForm;
