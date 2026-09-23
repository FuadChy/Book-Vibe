import Image from "next/image";
import Link from "next/link";
import BannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 rounded-lg bg-slate-100 px-6 py-10 md:grid-cols-2 md:px-10 md:py-12">
          
          {/* Banner Content */}
          <div className="space-y-5">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Books to freshen up
              <br />
              your bookshelf
            </h1>

            <Link
              href="/books"
              className="btn border-none bg-green-600 text-white hover:bg-green-700"
            >
              View The List
            </Link>
          </div>

          {/* Banner Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={BannerImg}
              alt="Featured book"
              width={300}
              height={300}
              className="h-auto w-52 object-contain md:w-64"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;