
import Link from "next/link";

type Book = {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
};

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      
      {/* Book Image */}
      <div className="flex h-60 items-center justify-center rounded-lg bg-slate-100 p-5">
<img
  src={book.image}
  alt={book.bookName}
  referrerPolicy="no-referrer"
  className="h-full w-auto object-contain"
/>
      </div>

      {/* Book Details */}
      <div className="mt-4">

        {/* Tags */}
        <div className="mb-2 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Name */}
        <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-600">
          By: {book.author}
        </p>

        {/* Category & Rating */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-sm font-medium text-gray-600">
            {book.category}
          </span>

          <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <span>⭐</span>
            <span>{book.rating}</span>
          </div>
        </div>

        {/* Details Button */}
        <Link
          href={`/books/${book.bookId}`}
          className="mt-4 block w-full rounded-lg bg-green-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Book Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;