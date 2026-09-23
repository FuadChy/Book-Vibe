import BookCard from "@/components/homepage/BookCard";

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

const getBooks = async (): Promise<Book[]> => {
  const res = await fetch(
    "http://localhost:3000/booksData.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data: Book[] = await res.json();

  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-16 px-4 md:my-20">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Books
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-gray-600 md:text-base">
          Explore our collection of books and find your next
          favorite read.
        </p>
      </div>

      {/* All Books */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;