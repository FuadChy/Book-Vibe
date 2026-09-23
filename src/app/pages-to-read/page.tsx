"use client";

import { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";

const PagesToReadPage = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error(
      "PagesToReadPage must be used inside BooksProvider"
    );
  }

  const { readBooks } = context;

  return (
    <main className="min-h-screen bg-white px-4 py-10 md:px-8 md:py-14">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Pages to Read
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600 md:text-base">
            Track the total number of pages in the books
            you have added to your reading list.
          </p>
        </div>

        {/* Chart */}
        <div className="rounded-2xl bg-slate-50 p-5 shadow-sm md:p-10">

          {readBooks.length === 0 ? (
            <div className="flex min-h-[350px] items-center justify-center text-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  No Read Books Yet
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Add some books to Read Books to see your
                  reading statistics here.
                </p>
              </div>
            </div>
          ) : (
            <div>
              {/* Total Pages */}
              <div className="mb-8 text-center">
                <p className="text-sm text-gray-500">
                  Total Pages
                </p>

                <p className="mt-1 text-3xl font-bold text-green-600">
                  {readBooks.reduce(
                    (total, book) => total + book.totalPages,
                    0
                  )}
                </p>
              </div>

              {/* Bars */}
              <div className="flex min-h-[350px] items-end justify-center gap-4 overflow-x-auto border-b border-gray-200 px-4 pb-0 md:gap-8">

                {readBooks.map((book) => {
                  const maxPages = Math.max(
                    ...readBooks.map(
                      (item) => item.totalPages
                    )
                  );

                  const height =
                    (book.totalPages / maxPages) * 280;

                  return (
                    <div
                      key={book.bookId}
                      className="flex min-w-20 flex-col items-center justify-end"
                    >
                      {/* Page Count */}
                      <span className="mb-2 text-xs font-semibold text-gray-700">
                        {book.totalPages}
                      </span>

                      {/* Bar */}
                      <div
                        className="w-12 rounded-t-lg bg-green-500 transition-all hover:bg-green-600 md:w-16"
                        style={{
                          height: `${height}px`,
                        }}
                        title={`${book.bookName}: ${book.totalPages} pages`}
                      />

                      {/* Book Name */}
                      <p className="mt-3 w-20 truncate text-center text-xs text-gray-500">
                        {book.bookName}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
};

export default PagesToReadPage;