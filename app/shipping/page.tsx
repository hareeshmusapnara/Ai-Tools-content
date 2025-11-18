export default function Shipping() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Digital Service</h2>
              <p className="text-gray-600 leading-relaxed">
                Our AI content generation service is entirely digital. No physical products are shipped.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Instant Access</h2>
              <p className="text-gray-600 leading-relaxed">
                Upon successful payment, you will receive instant access to all features and templates in your subscription plan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Account Activation</h2>
              <p className="text-gray-600 leading-relaxed">
                Your account will be activated immediately after payment confirmation. You can start using the service right away.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}