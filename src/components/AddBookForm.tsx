// import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { usePostBookMutation } from "../redux/features/books/bookApi";

type Inputs = {
  Title: string;
  Author: string;
  Genre: string;
  PublicationDate: string;
  image: string;
};

export default function AddBookForm() {
  const [postBook] = usePostBookMutation();
  // const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
    postBook(data);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          {/* <input defaultValue="test" {...register("example")} /> */}

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[400px] "
              {...register("Title", { required: true })}
            />
            {errors.Title && <span>This field is required</span>}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[400px] "
              {...register("Author", { required: true })}
            />
            {errors.Author && <span>This field is required</span>}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[400px] "
              {...register("Genre", { required: true })}
            />
            {errors.Genre && <span>This field is required</span>}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">PublicationDate</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[400px] "
              {...register("PublicationDate", { required: true })}
            />
            {errors.PublicationDate && <span>This field is required</span>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[400px] "
              {...register("image", { required: true })}
            />
            {errors.image && <span>This field is required</span>}
          </div>

          <button type="submit" className="btn mt-3">
            Submit
          </button>
          {/* <input type="submit" /> */}
        </form>
      </div>
    </div>
  );
}
