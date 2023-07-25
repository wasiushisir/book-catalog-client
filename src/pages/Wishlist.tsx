import React from "react";
import { useGetWishesQuery } from "../redux/features/books/bookApi";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { data, isLoading } = useGetWishesQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  console.log(data?.data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-[100px] mt-[25px]">
        {data?.data?.map((book) => (
          <>
            <Link to={`/bookDetails/${book._id}`}>
              <div className="">
                <div className="rounded-2xl h-[470px] flex flex-col items-center justify-between cursor-pointer overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2 pb-3">
                  <img
                    className="h-[310px] w-full"
                    src={book?.image}
                    alt="product"
                  />
                  <h1 className="text-xl font-semibold">
                    Title: {book?.Title}
                  </h1>
                  <h1 className="text-md font-medium">
                    Author: {book?.Author}
                  </h1>
                  <h1 className="text-md font-medium">Genre: {book?.Genre}</h1>
                  <h1 className="text-md font-medium">
                    Publication Date: {book?.PublicationDate}
                  </h1>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
