import React from "react";
import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center mt-[100px]">
      {/* <SignUpForm /> */}

      <div className="card w-[500px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <h1 className="text-3xl font-bold">Signup</h1>
        </figure>
        <div className="card-body items-center text-center">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
