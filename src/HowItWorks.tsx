// src/HowItWorks.tsx
import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-lg mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            How Does This App Work?
          </h1>
        </header>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-600 mb-4">
            Tunywe helps you keep track of how much you drink. It’s designed to
            help you stay sober and enjoy drinking responsibly.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Track Your Drinks
          </h2>
          <p className="text-gray-600 mb-4">
            Use the "+" button to add a drink and the "-" button to remove one.
            This helps you monitor your daily intake.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Check Your Stats
          </h2>
          <p className="text-gray-600 mb-4">
            The app shows your drinking stats for today, this week, and this
            month. Stats reset daily at midnight, weekly on Monday, and monthly
            on the 1st.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Fun and Helpful Quotes
          </h2>
          <p className="text-gray-600 mb-4">
            Every hour, the app displays a quote that is both fun and a reminder
            to drink responsibly.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Stay Motivated
          </h2>
          <p className="text-gray-600">
            Our goal is to help you drink less and enjoy a healthier lifestyle.
            The quotes, stats, and reminders are there to support you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
