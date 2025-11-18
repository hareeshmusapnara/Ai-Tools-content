export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Use License</h2>
              <p className="text-gray-600 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}