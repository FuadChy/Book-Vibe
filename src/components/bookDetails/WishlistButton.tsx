"use client";

import { useContext } from "react";
import {
  BooksContext,
  type Book,
} from "@/context/BooksContext";

type WishlistButtonProps = {
  book: Book;
};

const WishlistButton = ({ book }: WishlistButtonProps) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error(
      "WishlistButton must be used inside BooksProvider"
    );
  }

  const { addToWishlist, wishlist } = context;

  const handleWishlist = () => {
    const alreadyWishlisted = wishlist.some(
      (item) => item.bookId === book.bookId
    );

    if (alreadyWishlisted) {
      alert("This book is already in your Wishlist!");
      return;
    }

    addToWishlist(book);

    alert(`${book.bookName} added to Wishlist!`);
  };

  return (
    <button
      type="button"
      onClick={handleWishlist}
      className="btn flex-1 border border-green-600 bg-white text-green-600 hover:bg-green-50"
    >
      Wishlist
    </button>
  );
};

export default WishlistButton;