export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We're dedicated to revolutionizing content creation through AI technology, making it accessible and efficient for everyone.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">What We Do</h2>
              <p className="text-gray-600 leading-relaxed">
                Our platform provides AI-powered tools for generating high-quality content including blogs, social media posts, and marketing materials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower creators worldwide with intelligent tools that enhance creativity and productivity in the digital age.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}