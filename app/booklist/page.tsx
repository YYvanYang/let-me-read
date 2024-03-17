/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ggBMoT7zJJQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <>
      <main className="flex flex-col gap-8 p-8">
        <header className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link className="text-2xl font-bold" href="#">
                  Ebook Universe
                </Link>
              </div>
              <nav className="hidden md:flex space-x-10">
                <Link className="text-base font-medium" href="#">
                  Classics
                </Link>
                <Link className="text-base font-medium" href="#">
                  Modern
                </Link>
                <Link className="text-base font-medium" href="#">
                  Science Fiction
                </Link>
                <Link className="text-base font-medium" href="#">
                  Non-Fiction
                </Link>
                <Link className="text-base font-medium" href="#">
                  Biographies
                </Link>
              </nav>
              <div className="flex items-center justify-end flex-1 lg:w-0">
                <input
                  className="border border-gray-300 rounded p-2 w-64"
                  placeholder="Search for ebooks..."
                  type="text"
                />
                <button className="ml-4 bg-black text-white rounded p-2">
                  Search
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{`Editor's Pick`}</h2>
            <div className="flex gap-4">
              <Image
                alt="Influential Classic Book Cover"
                className="w-48"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/300",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Influential Classic</h3>
                <p className="text-lg">{`Author's Masterpiece`}</p>
                <p>
                  Explore the depths of human nature and the complexities of
                  life through this timeless classic, celebrated for its
                  profound impact on literature and society.
                </p>
                <Link
                  className="bg-black text-white rounded p-2 w-max"
                  href="#"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Must-Read eBooks</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <Image
                  alt="Modern Life Reflections Book Cover"
                  className="w-36"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/200",
                    objectFit: "cover",
                  }}
                  width="150"
                />

                <h3 className="text-lg font-bold">Modern Life Reflections</h3>
                <p className="text-md">Contemporary Author</p>
                <p>
                  {`Dive into the complexities of modern society through the eyes of characters that resonate with today's
                  challenges and triumphs.`}
                </p>
                <Link
                  className="bg-black text-white rounded p-2 w-max"
                  href="#"
                >
                  View Details
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  alt="The Science of Tomorrow Book Cover"
                  className="w-36"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/200",
                    objectFit: "cover",
                  }}
                  width="150"
                />

                <h3 className="text-lg font-bold">The Science of Tomorrow</h3>
                <p className="text-md">Visionary Writer</p>
                <p>
                  Embark on a journey through time and space with groundbreaking
                  ideas that push the boundaries of what we believe is possible.
                </p>
                <Link
                  className="bg-black text-white rounded p-2 w-max"
                  href="#"
                >
                  View Details
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  alt="Unveiling History Book Cover"
                  className="w-36"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/200",
                    objectFit: "cover",
                  }}
                  width="150"
                />

                <h3 className="text-lg font-bold">Unveiling History</h3>
                <p className="text-md">Renowned Historian</p>
                <p>
                  Uncover the secrets of the past with a compelling narrative
                  that brings history to life, offering insights into our
                  present and future.
                </p>
                <Link
                  className="bg-black text-white rounded p-2 w-max"
                  href="#"
                >
                  View Details
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  alt="Inspiring Biographies Book Cover"
                  className="w-36"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/200",
                    objectFit: "cover",
                  }}
                  width="150"
                />

                <h3 className="text-lg font-bold">Inspiring Biographies</h3>
                <p className="text-md">Influential Figures</p>
                <p>
                  Get inspired by the stories of individuals who have made
                  significant contributions to the world, overcoming obstacles
                  and achieving greatness.
                </p>
                <Link
                  className="bg-black text-white rounded p-2 w-max"
                  href="#"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </section>
        <footer className="mt-8 py-4 bg-gray-200 text-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Stay Connected</h2>
            <p>
              Join our newsletter to get the latest ebook updates and
              recommendations.
            </p>
            <div className="flex justify-center items-center gap-2">
              <input
                className="border border-gray-300 rounded p-2"
                placeholder="Enter your email"
                type="email"
              />
              <button className="bg-black text-white rounded p-2">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p>© 2024 Ebook Universe. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
