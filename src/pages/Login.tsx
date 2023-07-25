import React from "react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="flex justify-center items-center mt-[100px]">
      {/* <SignUpForm /> */}

      <div className="card w-[500px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <h1 className="text-3xl font-bold">Login</h1>
        </figure>
        <div className="card-body items-center text-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
