import React from 'react'
import { redirect } from "next/navigation";

const LoginPage = async () => {
  redirect("./dashboard");
  return (
      <div className='w-full h-auto flex flex-col justify-center items-center mt-12'>
        {/* <LoginForm /> */}
      </div>
  )
}

export default LoginPage
