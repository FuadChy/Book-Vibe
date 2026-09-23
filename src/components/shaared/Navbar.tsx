"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/book.ico";

const Navbar = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isListedBooks = pathname === "/listed-books";
  const isBooks = pathname.startsWith("/books/");
  const isPagesToRead = pathname === "/pages-to-read";

  return (
    <nav className="navbar sticky top-0 z-50 min-h-16 bg-white px-4 shadow-sm md:px-8">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Navigation */}
          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-white p-3 shadow-lg"
          >
            <li>
              <Link
                href="/"
                className={
                  isHome ? "text-green-600" : "text-gray-600"
                }
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/listed-books"
                className={
                  isListedBooks
                    ? "text-green-600"
                    : "text-gray-600"
                }
              >
                Listed Books
              </Link>
            </li>

            <li>
              <Link
                href="/pages-to-read"
                className={
                  isPagesToRead
                    ? "text-green-600"
                    : "text-gray-600"
                }
              >
                Pages to Read
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="ml-2 flex items-center gap-2 lg:ml-0"
        >
          <Image
            src={Logo}
            alt="Book Vibe logo"
            width={30}
            height={30}
          />

          <span className="text-lg font-bold text-gray-800">
            Book Vibe
          </span>
        </Link>
      </div>

      {/* Center Navigation - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-2">
          {/* Home */}
          <li>
            <Link
              href="/"
              className={
                isHome
                  ? "rounded-md border border-green-500 px-4 py-2 text-green-600"
                  : "rounded-md px-4 py-2 text-gray-600 hover:text-gray-900"
              }
            >
              Home
            </Link>
          </li>

          {/* Listed Books */}
          <li>
            <Link
              href="/listed-books"
              className={
                isListedBooks
                  ? "rounded-md border border-green-500 px-4 py-2 text-green-600"
                  : "rounded-md px-4 py-2 text-gray-600 hover:text-gray-900"
              }
            >
              Listed Books
            </Link>
          </li>

          {/* Pages To Read */}
          <li>
            <Link
              href="/pages-to-read"
              className={
                isPagesToRead
                  ? "rounded-md border border-green-500 px-4 py-2 text-green-600"
                  : "rounded-md px-4 py-2 text-gray-600 hover:text-gray-900"
              }
            >
              Pages to Read
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-2">
        <Link
          href="/login"
          className="btn btn-sm border-none bg-green-600 px-4 text-white hover:bg-green-700"
        >
          Sign In
        </Link>

        <Link
          href="/signup"
          className="btn btn-sm border-none bg-cyan-500 px-4 text-white hover:bg-cyan-600"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;