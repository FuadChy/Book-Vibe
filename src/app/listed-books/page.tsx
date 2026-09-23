import ListedBooksTabs from "@/components/listed-books/ListedBooksTabs";

const ListedBooksPage = () => {
  return (
    <main className="min-h-screen bg-white px-4 py-8 md:py-12">
      <div className="container mx-auto max-w-6xl">

        {/* Page Heading */}
        <div className="rounded-lg bg-slate-100 py-5 text-center">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Listed Books
          </h1>
        </div>

        {/* Tabs + Books */}
        <div className="mt-8">
          <ListedBooksTabs />
        </div>

      </div>
    </main>
  );
};

export default ListedBooksPage;