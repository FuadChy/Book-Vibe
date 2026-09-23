"use client";

import { createContext, useState } from "react";

export type Book = {
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

type BooksContextType = {
  readBooks: Book[];
  wishlist: Book[];
  addToReadBooks: (book: Book) => void;
  addToWishlist: (book: Book) => void;
};

export const BooksContext =
  createContext<BooksContextType | null>(null);

const BooksProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [wishlist, setWishlist] = useState<Book[]>([]);

  const addToReadBooks = (book: Book) => {
    setReadBooks((previousBooks) => {
      const alreadyExists = previousBooks.some(
        (item) => item.bookId === book.bookId
      );

      if (alreadyExists) {
        return previousBooks;
      }

      return [...previousBooks, book];
    });
  };

  const addToWishlist = (book: Book) => {
    setWishlist((previousBooks) => {
      const alreadyExists = previousBooks.some(
        (item) => item.bookId === book.bookId
      );

      if (alreadyExists) {
        return previousBooks;
      }

      return [...previousBooks, book];
    });
  };

  return (
    <BooksContext.Provider
      value={{
        readBooks,
        wishlist,
        addToReadBooks,
        addToWishlist,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;