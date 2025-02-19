"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.role === "admin") {
        router.push("/admin/dashboard")
      } else if (session?.user?.role === "user") {
        router.push("/user/dashboard")
      }
    }
  }, [status, session, router])

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">جاري التحميل...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Viken Bad</span>
              <span className="ml-2 text-sm text-gray-500">نظام إدارة الموظفين</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/auth/login"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-48 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            نظام إدارة Viken Bad الداخلي
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            منصة متكاملة لإدارة المشاريع وتتبع الوقت للموظفين والمشرفين
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/auth/login"
              className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              تسجيل الدخول للنظام
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              مميزات النظام
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              أدوات متكاملة لإدارة العمل وتتبع المشاريع
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 rounded-lg bg-blue-100 p-3 text-blue-600 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">إدارة المشاريع</h3>
              <p className="mt-2 text-gray-600">
                تتبع وإدارة مشاريع التركيب والصيانة بكفاءة
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 rounded-lg bg-blue-100 p-3 text-blue-600 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">تسجيل ساعات العمل</h3>
              <p className="mt-2 text-gray-600">
                تسجيل وتتبع ساعات العمل للمشاريع المختلفة
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 rounded-lg bg-blue-100 p-3 text-blue-600 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">التقارير والإحصائيات</h3>
              <p className="mt-2 text-gray-600">
                تقارير تفصيلية عن أداء المشاريع وساعات العمل
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            هل أنت موظف في Viken Bad؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            سجل دخولك لإدارة مشاريعك وتسجيل ساعات عملك
          </p>
          <div className="mt-8">
            <Link
              href="/auth/login"
              className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="text-white">
              <span className="text-xl font-bold">Viken Bad</span>
              <p className="mt-2 text-gray-400">نظام إدارة المشاريع الداخلي</p>
            </div>
            <div className="mt-8 flex space-x-6 md:mt-0">
              <Link href="/contact" className="text-gray-400 hover:text-gray-300">
                الدعم الفني
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Viken Bad. نظام داخلي
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 