import TodoEditForm from "@/app/ui/dashboard/TodoEditForm";
import React from "react";

const TodoDetail = async ({ params }) => {
  const {id} = params;
  return (
    <>
        <TodoEditForm id={id} />
    </>
  );
};

export default TodoDetail;
