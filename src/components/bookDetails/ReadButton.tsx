"use client";

import { useContext } from "react";
import {
  BooksContext,
  type Book,
} from "@/context/BooksContext";

type ReadButtonProps = {
  book: Book;
};

const ReadButton = ({ book }: ReadButtonProps) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error(
      "ReadButton must be used inside BooksProvider"
    );
  }

  const { addToReadBooks, readBooks } = context;

  const handleReadBook = () => {
    const alreadyRead = readBooks.some(
      (item) => item.bookId === book.bookId
    );

    if (alreadyRead) {
      alert("This book is already in your Read Books!");
      return;
    }

    addToReadBooks(book);

    alert(`${book.bookName} added to Read Books!`);
  };

  return (
    <button
      type="button"
      onClick={handleReadBook}
      className="btn flex-1 border-none bg-green-600 text-white hover:bg-green-700"
    >
      Read
    </button>
  );
};

export default ReadButton;