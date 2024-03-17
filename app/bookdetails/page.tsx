/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Vd3i8PXPDzi
 */
import { Button } from "~/components/ui/button"
import { Tabs } from "~/components/ui/tabs"
import Link from "next/link"

export default function BookDetails() {
  return (
    <div className="max-full mx-auto p-6 bg-white shadow-lg">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-shrink-0">
          <img
            alt="Python Coding Beginner Book Cover"
            className="w-48 h-72 object-cover"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/300",
              objectFit: "cover",
            }}
            width="200"
          />
        </div>
        <div className="flex-grow ml-0 lg:ml-8">
          <h1 className="text-2xl font-bold mt-4 lg:mt-0">{`Books About Python Coding: Beginner’s`}</h1>
          <p className="text-lg mt-1">by Kartik Bheel</p>
          <div className="mt-4">
            <p>Length: 54 pages</p>
            <p>Edition: 1</p>
            <p>Publication Date: 2024-03-10</p>
            <p>ISBN-10: B0CXP8HT19</p>
            <p>Sales Rank: #0 (See Top 100 Books)</p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex items-center">
              <StarIcon className="text-yellow-400 w-5 h-5" />
              <StarIcon className="text-yellow-400 w-5 h-5" />
              <StarIcon className="text-yellow-400 w-5 h-5" />
              <StarIcon className="text-yellow-400 w-5 h-5" />
              <StarIcon className="text-gray-300 w-5 h-5" />
            </div>
            <p className="ml-2 text-sm text-gray-600">0 ratings</p>
          </div>
          <div className="flex flex-wrap items-center mt-4 space-x-2">
            <FacebookIcon className="w-6 h-6 text-blue-600" />
            <TwitterIcon className="w-6 h-6 text-blue-400" />
            <LinkedinIcon className="w-6 h-6 text-blue-700" />
          </div>
          <div className="mt-4">
            <Button className="bg-yellow-400 text-white mr-2">Print Book</Button>
            <Button className="bg-blue-600 text-white">Look Inside</Button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Tabs>
          <div className="flex space-x-4 border-b">
            <Button className="text-blue-600 border-b-2 border-blue-600 pb-2" variant="ghost">
              Description
            </Button>
            <Button className="text-gray-600 pb-2" variant="ghost">
              Categories
            </Button>
            <Button className="text-gray-600 pb-2" variant="ghost">
              Tags
            </Button>
          </div>
          <div className="mt-4">
            <p>
              Starting with the basics of Python syntax and data types, the book gradually introduces more complex
              concepts such as object-oriented programming, GUI development, and working with APIs. Each chapter
              features hands-on coding projects that reinforce key concepts and demonstrate practical applications of
              Python programming.
            </p>
            <p className="mt-2">
              Readers will learn how to build text-based games, create graphical user interfaces, develop web scrapers,
              and much more. Throughout the book, clear explanations, step-by-step instructions, and well-commented code
              examples make learning Python enjoyable and accessible.
            </p>
            <h2 className="font-bold mt-4">Key Features:</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Step-by-step guidance through a progressive learning path.</li>
              <li>Practical projects that reinforce learning and demonstrate real-world applications.</li>
              <li>Interactive exercises and challenges to engage readers and test their understanding.</li>
              <li>
                Tips, tricks, and best practices to improve coding skills and develop effective programming habits.
              </li>
              <li>
                Guidance for further learning, including recommendations for additional resources and online courses.
              </li>
            </ul>
            <p className="mt-4">
              {`Whether you’re looking to kickstart your programming journey, enhance your skills, or embark on new coding
              projects, &quot;Python Programming Projects: From Beginner to Advanced&quot; is your go-to resource for mastering
              Python programming. Dive in and unlock the full potential of one of the most popular and versatile
              programming languages today.`}
            </p>
          </div>
        </Tabs>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
            <Button variant="outline">Free sample</Button>
            <Button variant="outline">How to download</Button>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <Button variant="secondary">Donate to keep this site alive</Button>
            <div className="flex flex-col space-y-1">
              <Link className="text-blue-600" href="#">
                NitroFlare | PDF | 4 MB | 2024/03/13
              </Link>
              <Link className="text-blue-600" href="#">
                Send | PDF | 4 MB | 2024/03/13
              </Link>
            </div>
          </div>
    </div>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
