import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";

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

type BookDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const getBooks = async (): Promise<Book[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const BookDetailsPage = async ({
  params,
}: BookDetailsPageProps) => {
  const { id } = await params;

  const books = await getBooks();

  const book = books.find(
    (book) => book.bookId === Number(id)
  );

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 md:py-16">
      <div className="container mx-auto">

        {/* Back Button */}
        <Link
          href="/books"
          className="mb-6 inline-block text-sm font-medium text-green-600 hover:text-green-700"
        >
          ← Back to Listed Books
        </Link>

        {/* Book Details Card */}
        <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">

          {/* Book Image */}
          <div className="flex min-h-[400px] items-center justify-center rounded-xl bg-slate-100 p-8">
            <Image
              src={book.image}
              alt={book.bookName}
              width={300}
              height={400}
              className="h-auto max-h-[380px] w-auto object-contain"
              unoptimized
            />
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <span className="mb-3 w-fit rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
              {book.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-2 text-gray-600">
              By <span className="font-medium">{book.author}</span>
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
              <span className="text-lg">⭐</span>

              <span className="font-semibold text-gray-800">
                {book.rating}
              </span>

              <span className="text-sm text-gray-500">
                Rating
              </span>
            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-green-200 px-3 py-1 text-sm text-green-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Book Information */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-gray-200 py-5">
              <div>
                <p className="text-sm text-gray-500">
                  Total Pages
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {book.totalPages}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Publisher
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {book.publisher}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Published
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {book.category}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              
<ReadButton book={book} />
             <WishlistButton book={book} />
            </div>

          </div>
        </div>

        {/* Review */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            About This Book
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {book.review}
          </p>
        </div>

      </div>
    </main>
  );
};

export default BookDetailsPage;