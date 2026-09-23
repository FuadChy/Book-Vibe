import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/shaared/Navbar";
import Footer from "@/components/shaared/Footer"
;
import BooksProvider from "@/context/BooksContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Vibe",
  description: "A book collection website",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <BooksProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </BooksProvider>
      </body>
    </html>
  );
};

export default RootLayout;