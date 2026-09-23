const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Book Vibe
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Discover your next favorite book, keep track of
              your reading journey, and build your personal
              collection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/books"
                  className="transition hover:text-white"
                >
                  Books
                </a>
              </li>

              <li>
                <a
                  href="/listed-books"
                  className="transition hover:text-white"
                >
                  Listed Books
                </a>
              </li>

              <li>
                <a
                  href="/pages-to-read"
                  className="transition hover:text-white"
                >
                  Pages to Read
                </a>
              </li>
            </ul>
          </div>

          {/* Reading */}
          <div>
            <h3 className="text-lg font-semibold">
              Reading
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="/listed-books"
                  className="transition hover:text-white"
                >
                  Read Books
                </a>
              </li>

              <li>
                <a
                  href="/listed-books"
                  className="transition hover:text-white"
                >
                  Wishlist
                </a>
              </li>

              <li>
                <a
                  href="/pages-to-read"
                  className="transition hover:text-white"
                >
                  Pages to Read
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Have a question or suggestion?
              <br />
              We'd love to hear from you.
            </p>

            <a
              href="mailto:hello@bookvibe.com"
              className="mt-3 inline-block text-sm font-medium text-green-400 hover:text-green-300"
            >
              hello@bookvibe.com
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-700 pt-6 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Book Vibe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;