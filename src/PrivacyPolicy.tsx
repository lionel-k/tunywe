function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-lg mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Privacy Policy
          </h1>
        </header>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-600 mb-4">
            Tunywe is committed to protecting your privacy. This privacy policy
            outlines the types of personal information we collect and how we
            use, store, and protect that information.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us, such as when you
            create an account, add transactions, or communicate with us. The
            information we may collect includes your email address, transaction
            data (e.g., descriptions, amounts, dates), and usage data.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            The information collected is used to provide and improve the Tunywe
            app's services, including storing transaction data, offering
            insights on expenses, and sending updates.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Data Storage and Security
          </h2>
          <p className="text-gray-600 mb-4">
            Your data is stored securely in the cloud using Firebase. We
            implement security measures to ensure your data is protected.
            However, no system can be completely secure, and we encourage you to
            use the app cautiously.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the right to access, update, or delete your data at any
            time. Contact us at contact@aho.bi for any data-related inquiries.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Changes to This Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We may update this privacy policy periodically. Please review it
            regularly. Continued use of the Tunywe app after updates constitutes
            acceptance of the revised policy.
          </p>
          <p className="text-gray-600">© 2024 Aho - All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
