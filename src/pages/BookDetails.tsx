import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  usePostBookListMutation,
  usePostCommentMutation,
  usePostWishMutation,
} from "../redux/features/books/bookApi";
// import {IBook} from '../types/globaltypes'
export default function BookDetails() {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState<string>("");
  const { data: book } = useGetSingleBookQuery(id);
  const [postWish] = usePostWishMutation();
  const [postBookList] = usePostBookListMutation();
  const [postComment] = usePostCommentMutation();

  const handleWishlist = () => {
    postWish(book);
  };

  const handleBooklist = () => {
    postBookList(book);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   console.log(inputValue);
  //   // postComment(inputValue);

  //   setInputValue("");
  // };
  // const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
  //   setInputValue(event.target.value);
  // };
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center ">
        <div className="w-[50%]">
          <img
            className=" h-[500px] w-[500px] rounded-lg"
            src={book?.image}
            alt=""
          />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.Title}</h1>
          <p className="text-xl">Author: {book?.Author}</p>
          <p className="text-xl">Genre: {book?.Genre}</p>
          <p className="text-xl">Publication Year: {book?.PublicationDate}</p>
          <button
            onClick={handleWishlist}
            className="mt-[20px] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Add to wishlist
          </button>
          <button
            onClick={handleBooklist}
            className="ml-3 mt-[20px] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Add to BookList
          </button>
        </div>
      </div>

      {/* <div className="flex justify-center items-center my-10 space-x-2">
        <div onSubmit={handleSubmit} className="form-control">
          <div className="input-group">
            <input
              onChange={handleChange}
              value={inputValue}
              type="text"
              placeholder="Search…"
              className="input input-bordered w-[600px]"
            />
           

            <button type="submit" value="Submit" className="btn btn-primary">
              Primary
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}
