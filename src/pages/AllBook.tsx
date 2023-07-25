import { useEffect } from "react";
import { useState } from "react";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { Link } from "react-router-dom";
import { IBook } from "../types/globaltypes";
type Fdata = {
  Title: string;
  Author: string;
  Genre: string;
};

export default function AllBook() {
  const [inputValue, setInputValue] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationYear, setPublicationYear] = useState("");

  const { data } = useGetBooksQuery(undefined);
  const [filter, setFilter] = useState([data?.data]);

  useEffect(() => {
    if (inputValue) {
      const p = data?.data.filter(
        (fdata) =>
          fdata.Title.toLowerCase().includes(inputValue.toLowerCase()) ||
          fdata.Author.toLowerCase().includes(inputValue.toLowerCase()) ||
          fdata.Genre.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilter(p);
    } else {
      setFilter(data?.data);
    }
  }, [inputValue]);

  useEffect(() => {
    let filterDat = [...data?.data];
    if (genre) {
      filterDat = filterDat.filter((d) => d.Genre === genre);
      // setFilter(filterDat);
    }

    if (publicationYear) {
      filterDat = filterDat.filter((d) =>
        d.PublicationDate.includes(publicationYear)
      );
    }

    setFilter(filterDat);

    if (genre === "All") {
      setFilter(data?.data);
    }
  }, [genre, publicationYear]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="form-control">
          <div className="input-group ">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered w-[450px]"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <select
          onChange={(e) => setGenre(e.target.value)}
          className="select select-bordered w-[150px] max-w-xs"
        >
          <option disabled selected>
            Select Genre
          </option>
          {data?.data.map((fdata) => (
            <>
              <option>{fdata.Genre}</option>
            </>
          ))}
          <option>All</option>
        </select>

        <select
          onChange={(e) => setPublicationYear(e.target.value)}
          className="select select-bordered w-[150px] max-w-xs"
        >
          <option disabled selected>
            select publication year
          </option>
          {data?.data.map((fdata) => (
            <>
              <option>{fdata.PublicationDate}</option>
            </>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-[100px] mt-[25px]">
        {filter.map((book) => (
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
