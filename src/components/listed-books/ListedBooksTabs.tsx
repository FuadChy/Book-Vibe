"use client";

import { useContext, useState } from "react";
import ListedBookCard from "@/components/listed-books/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";

const ListedBooksTabs = () => {
  const context = useContext(BooksContext);

  const [activeTab, setActiveTab] = useState<
    "read" | "wishlist"
  >("read");

  if (!context) {
    throw new Error(
      "ListedBooksTabs must be used inside BooksProvider"
    );
  }

  const { readBooks, wishlist } = context;

  const books =
    activeTab === "read"
      ? readBooks
      : wishlist;

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-200">
        <div className="flex">
          <button
            type="button"
            onClick={() => setActiveTab("read")}
            className={`border-b-2 px-6 py-3 text-sm font-semibold transition ${
              activeTab === "read"
                ? "border-green-600 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            Read Books
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("wishlist")}
            className={`border-b-2 px-6 py-3 text-sm font-semibold transition ${
              activeTab === "wishlist"
                ? "border-green-600 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            Wishlist Books
          </button>
        </div>
      </div>

      {/* Number of Books */}
      <div className="mt-6">
        <p className="text-sm text-gray-500">
          {books.length} book
          {books.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Selected Books */}
      <div className="mt-5">
        {books.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-white px-5 py-20 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab === "read"
                ? "No Read Books Yet"
                : "No Wishlist Books Yet"}
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              {activeTab === "read"
                ? "You haven't added any books to Read Books yet. Open a book and click Read to add it here."
                : "You haven't added any books to your Wishlist yet. Open a book and click Wishlist to add it here."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <ListedBookCard
                key={book.bookId}
                book={book}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooksTabs;