// src/components/Layout.tsx
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="max-w-lg mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <div className="inline-block p-4 rounded-full bg-blue-500 text-white mb-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Tunywe</h1>
          <p className="text-gray-600">Stay hydrated, stay happy!</p>
        </div>
      </header>
      {children}
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Uribuka kunywa mu rugero! 🌟</p>
        <p>&copy; 2024 Aho</p>
        <a href="/privacy-policy" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
      </footer>
    </div>
  </div>
);

export default Layout;
