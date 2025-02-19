"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ContactPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col space-y-4">
            {/* Top row with logo and back button */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Viken Bad</h2>
              <button
                onClick={() => router.back()}
                className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                رجوع
              </button>
            </div>
            
            {/* Bottom row with navigation */}
            <div className="flex items-center justify-between border-t pt-4">
              <nav className="flex items-center space-x-6 space-x-reverse">
                <Link 
                  href="/"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  الرئيسية
                </Link>
                <span className="text-sm font-medium text-blue-600">اتصل بنا</span>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-2xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">اتصل بنا</h1>
            <p className="mt-2 text-lg text-gray-600">
              نحن هنا لمساعدتك. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.
            </p>
          </div>

          <form 
            action="https://formspree.io/f/xpwqkorq"
            method="POST"
            className="mt-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                الاسم
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                الموضوع
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                الرسالة
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                إرسال
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
} 