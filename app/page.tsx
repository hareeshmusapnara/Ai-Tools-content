"use client"
import Image from "next/image";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="relative p-4 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between">
            <div>
              <Image src={'/logo.svg.jpeg'} alt="logo" width={150} height={150} />
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:ps-7">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <a href="/about-us" className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 font-medium transition-all duration-300 rounded-full shadow-md hover:shadow-xl transform hover:scale-105">
                  <span className="text-lg">👥</span>
                  About Us
                </a>
                <a href="/terms-conditions" className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 font-medium transition-all duration-300 rounded-full shadow-md hover:shadow-xl transform hover:scale-105">
                  <span className="text-lg">📋</span>
                  Terms
                </a>
                <a href="/privacy" className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 font-medium transition-all duration-300 rounded-full shadow-md hover:shadow-xl transform hover:scale-105">
                  <span className="text-lg">🔒</span>
                  Privacy
                </a>
                <a href="/shipping" className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-medium transition-all duration-300 rounded-full shadow-md hover:shadow-xl transform hover:scale-105">
                  <span className="text-lg">🚚</span>
                  Shipping
                </a>
                <a href="/cancellation-refunds" className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 font-medium transition-all duration-300 rounded-full shadow-md hover:shadow-xl transform hover:scale-105">
                  <span className="text-lg">💰</span>
                  Refunds
                </a>
              </div>
              <div className="cursor-pointer">
                {!user ? (
                  <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                    <button className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                      Get Started
                    </button>
                  </SignInButton>
                ) : (
                  <UserButton />
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-sm text-blue-800 p-2 ps-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
              🚀 Welcome to the Future of Content Creation
              <span className="py-1.5 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-sm text-white">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              AI-Powered
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Content Creation
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">Made Simple ✨</span>
            </h1>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Transform your ideas into engaging content with our AI-powered platform. Generate blogs, social media posts, code, and more in seconds.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Try AI Content Generation</h3>
              <p className="text-xl text-gray-600 mb-8 text-center">Enter your idea and see the magic happen instantly!</p>
              <div className="flex gap-4 max-w-2xl mx-auto">
                <input 
                  type="text" 
                  placeholder="What content would you like to create today?"
                  className="flex-1 px-6 py-4 text-lg rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  suppressHydrationWarning
                />
                {user ? (
                  <a href="/dashboard" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group">
                    <svg className="w-8 h-8 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </a>
                ) : (
                  <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group" suppressHydrationWarning>
                      <svg className="w-8 h-8 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </button>
                  </SignInButton>
                )}
              </div>
              <p className="text-lg text-gray-500 mt-6 text-center">
                {user ? "✨ Click the arrow to go to dashboard" : "🔐 Sign in to start generating amazing content"}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {user ? (
              <a className="group inline-flex justify-center items-center gap-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white text-lg font-semibold rounded-xl px-8 py-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                href="/dashboard">
                🎯 Go to Dashboard
                <svg className="flex-shrink-0 size-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            ) : (
              <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                <div className="group inline-flex justify-center items-center gap-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white text-lg font-semibold rounded-xl px-8 py-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  🚀 Get Started Free
                  <svg className="flex-shrink-0 size-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </SignInButton>
            )}
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ✅ No credit card required • 25+ templates • Instant access
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">AI Templates</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">⚡</div>
              <div className="text-gray-700 font-medium">Lightning Fast</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-indigo-600 mb-2">∞</div>
              <div className="text-gray-700 font-medium">Unlimited Ideas</div>
            </div>
          </div>


        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Platform?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make content creation effortless and efficient
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center items-center size-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                <svg className="flex-shrink-0 size-8 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="10" height="14" x="3" y="8" rx="2" />
                  <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                  <path d="M8 18h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">25+ AI Templates</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Ready-to-use templates for blogs, social media, code, and marketing content</p>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center items-center size-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                <svg className="flex-shrink-0 size-8 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Generate high-quality content in seconds with our advanced AI technology</p>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center items-center size-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                <svg className="flex-shrink-0 size-8 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
                  <path d="M3 12c0 5.5 4.5 10 10 10s10-4.5 10-10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">Smart Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Track your content performance with detailed analytics and insights</p>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center items-center size-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                <svg className="flex-shrink-0 size-8 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors">Multi-Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Create content optimized for all major social media and blogging platforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}