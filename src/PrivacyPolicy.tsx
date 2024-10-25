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
            Tunywe respects your privacy. This policy explains how we collect,
            use, and protect your information.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We collect minimal data, such as drink tracking information, usage
            statistics, and app interaction details. No personal identifiers
            like email addresses or names are required.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            The collected data is used solely for tracking your drink habits,
            displaying statistics, and improving the app's features. We do not
            share your data with third parties.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Data Storage and Security
          </h2>
          <p className="text-gray-600 mb-4">
            Your data is stored locally on your device. We do not store any data
            on external servers. Ensure your device is secure to protect your
            information.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            Since the app does not store personal information on our servers,
            you control all your data locally. You can delete or reset the app
            to clear all data.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Changes to This Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We may update this policy occasionally. Please review it
            periodically. Continued use of the app indicates acceptance of the
            policy.
          </p>
          <p className="text-gray-600">© 2024 Aho - All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
