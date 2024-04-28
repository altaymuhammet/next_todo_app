import React from 'react';
import Sidebar from "../ui/dashboard/Sidebar";
import { findUser } from "../lib/actions";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from 'next/cache';

const Layout = async ({ children }) => {
  
  const authUser = await currentUser();
  const user = await findUser(authUser.emailAddresses[0].emailAddress);
  if(user === null) {
    revalidatePath("/dashboard");
    return
  }

  const newUserInfo = {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    img: user.img,
    todos: user.todos,
    tags: user.tags,
  };

  return (
    <div className="w-full flex justify-start items-start p-4 pt-8 gap-12">
      <div className="w-[400px] h-[100vh]">
        <Sidebar userInfo={newUserInfo} />
      </div>
      <div className="w-full h-[100vh]">{children}</div>
    </div>
  );
};

export default Layout;
