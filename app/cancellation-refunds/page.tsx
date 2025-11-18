export default function CancellationRefunds() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cancellation & Refunds</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Cancellation Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                You may cancel your subscription at any time. Cancellations will take effect at the end of your current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Refund Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a 30-day money-back guarantee for all new subscriptions. Refunds will be processed within 5-7 business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">How to Request a Refund</h2>
              <p className="text-gray-600 leading-relaxed">
                To request a refund, please contact our support team with your account details and reason for the refund request.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}