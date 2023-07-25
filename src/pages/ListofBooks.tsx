import { useGetBookListQuery } from "../redux/features/books/bookApi";
import { Link } from "react-router-dom";
import "../../src/toggle.css";
import { IBook } from "../types/globaltypes";
export default function ListofBooks() {
  const { data } = useGetBookListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-[100px] mt-[25px]">
        {data?.data?.map((book: IBook) => (
          <>
            <div className="rounded-2xl h-[470px] flex flex-col items-center justify-between cursor-pointer overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl  gap-2 pb-3">
              <Link to={`/bookDetails/${book._id}`}>
                <img
                  className="h-[310px] w-full"
                  src={book?.image}
                  alt="product"
                />
                <h1 className="text-xl font-semibold">Title: {book?.Title}</h1>
                <h1 className="text-md font-medium">Author: {book?.Author}</h1>
                <h1 className="text-md font-medium">Genre: {book?.Genre}</h1>
                <h1 className="text-md font-medium">
                  Publication Date: {book?.PublicationDate}
                </h1>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
