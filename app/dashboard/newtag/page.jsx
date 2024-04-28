import React from 'react'
import { addTag } from "@/app/lib/actions";

const NewTag = () => {
  return (
    <form
    action={addTag}
    className="w-full relative flex flex-col justify-start items-start gap-3 shadow-lg p-4 rounded-lg border"
  >
    <label htmlFor="tagInput" className="font-semibold">
      New Tag
    </label>
    <input
      type="text"
      name="tagInput"
      className="w-full border p-2 rounded-lg"
    />
    <button
      type="submit"
      className="px-12 py-2 bg-teal-500 text-white text-lg hover:bg-teal-600 rounded-md shadow-md"
    >
      Add
    </button>
  </form>
  )
}

export default NewTag