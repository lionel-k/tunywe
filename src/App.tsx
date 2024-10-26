import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BeerIcon, TrendingUpIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuotes } from "./hooks/useQuotes";
import { useDrinkingStats } from "./hooks/useDrinkingStats";
import Stats from "./components/Stats";
import QuoteDisplay from "./components/QuoteDisplay";
import Counter from "./components/Counter";
import PrivacyPolicy from "./PrivacyPolicy";

// Layout component to share common elements across different pages
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="max-w-lg mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <div className="inline-block p-4 rounded-full bg-blue-500 text-white mb-4">
          <Link to="/">
            <BeerIcon size={32} />
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Tunywe</h1>
        <p className="text-gray-600">Guma unywa, guma unezerewe!</p>
      </header>
      {children}
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Uribuka kunywa mu rugero! 🌟</p>
        <p>
          &copy; 2024{" "}
          <a
            href="https://www.aho.bi"
            className="text-blue-500 hover:underline"
          >
            Aho
          </a>
        </p>
        <a href="/privacy-policy" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
      </footer>
    </div>
  </div>
);

function App() {
  const { currentQuote } = useQuotes();
  const { stats, addDrink, removeDrink } = useDrinkingStats();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <QuoteDisplay quote={currentQuote} />
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Ibinyobwa vy'uyu munsi
                  </h2>
                  <TrendingUpIcon className="text-blue-500" />
                </div>
                <Counter
                  count={stats.today}
                  onIncrement={addDrink}
                  onDecrement={removeDrink}
                />
              </div>
              <Stats stats={stats} />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
