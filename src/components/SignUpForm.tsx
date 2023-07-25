// import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { createUser, googleUser } from "../redux/user/userSlice";
import googleImg from "../img/gggoogle (1).png";
import { Link, useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
  confirmpassword: string;
};

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    dispatch(createUser({ email: data.email, password: data.password }));
    console.log(data);
  };

  if (user?.email) {
    navigate("/");
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* <input defaultValue="test" {...register("example")} /> */}

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-[400px] "
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-[400px] "
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-[400px] "
            {...register("confirmpassword")}
          />
          {/* {errors.password && <span>This field is required</span>} */}
        </div>

        <button type="submit" className="btn mt-3">
          Button
        </button>
        {/* <input type="submit" /> */}
      </form>
      <div className="flex justify-center items-center mt-2">
        <div
          onClick={() => dispatch(googleUser())}
          className="flex justify-center items-center w-[200px] bg-base-200 p-2 rounded-xl cursor-pointer"
        >
          <img className="h-[30px] w-[30px]" src={googleImg} alt="" />
          <p>Google Signin</p>
        </div>
      </div>
      <Link to="/login">
        {" "}
        <p className="absolute top-0 right-2 text-blue-700">Login</p>
      </Link>
    </div>
  );
}
