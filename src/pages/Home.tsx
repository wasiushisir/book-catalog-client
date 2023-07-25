import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/books/bookApi";

export default function Home() {
  const { data } = useGetBooksQuery(undefined);

  return (
    <div className="px-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data?.data
          .slice()
          .reverse()
          .slice(0, 10)
          .map((book: string) => (
            <BookCard book={book} />
          ))}
      </div>
    </div>
  );
}
