/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/lrjMXbOMndL
 */
import Link from "next/link";

export default function BookDetails() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">eBook Title</h1>
        <Link className="text-lg" href="#">
          Back to Home
        </Link>
      </header>
      <section className="flex gap-4">
        <img
          className="w-64"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: "300/400",
            objectFit: "cover",
          }}
          width="300"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">eBook Title</h2>
          <p className="text-lg">Author Name</p>
          <p>
            Immerse yourself in the narrative as you explore the themes,
            characters, and settings that have captivated readers for
            generations. This eBook offers a unique perspective on life,
            challenging readers to think deeply about their own beliefs and
            values.
          </p>
          <button className="bg-black text-white rounded p-2 w-max">
            Purchase eBook
          </button>
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
  );
}
