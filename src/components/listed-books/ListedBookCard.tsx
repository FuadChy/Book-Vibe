import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/context/BooksContext";

type ListedBookCardProps = {
  book: Book;
};

const ListedBookCard = ({ book }: ListedBookCardProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row">
      
      {/* Book Image */}
      <div className="flex h-44 w-full shrink-0 items-center justify-center rounded-lg bg-slate-100 p-4 md:w-36">
        <Image
          src={book.image}
          alt={book.bookName}
          width={120}
          height={160}
          className="h-full w-auto object-contain"
          unoptimized
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Name */}
        <h2 className="mt-2 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-600">
          By: {book.author}
        </p>

        {/* Book Information */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
          <span>
            Pages:{" "}
            <span className="font-medium text-gray-700">
              {book.totalPages}
            </span>
          </span>

          <span>
            Publisher:{" "}
            <span className="font-medium text-gray-700">
              {book.publisher}
            </span>
          </span>

          <span>
            Year:{" "}
            <span className="font-medium text-gray-700">
              {book.yearOfPublishing}
            </span>
          </span>
        </div>

        {/* Category + Rating + Details */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            {book.category}
          </span>

          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
            ⭐ {book.rating}
          </span>

          <Link
            href={`/books/${book.bookId}`}
            className="rounded-lg bg-green-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-green-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;