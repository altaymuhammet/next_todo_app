import React from "react";
import { createNewUser } from "../lib/actions";

const page = async () => {
  await createNewUser();

  return <div>page</div>;
};

export default page;
