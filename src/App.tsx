import React from "react";
import { BeerIcon, CalendarDaysIcon, TrendingUpIcon } from "lucide-react";
import { useQuotes } from "./hooks/useQuotes";
import { useDrinkingStats } from "./hooks/useDrinkingStats";
import Stats from "./components/Stats";
import QuoteDisplay from "./components/QuoteDisplay";
import Counter from "./components/Counter";

function App() {
  const { currentQuote } = useQuotes();
  const { stats, addDrink, removeDrink } = useDrinkingStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-lg mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="inline-block p-4 rounded-full bg-blue-500 text-white mb-4">
            <BeerIcon size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Drink Tracker
          </h1>
          <p className="text-gray-600">Stay hydrated, stay happy!</p>
        </header>

        <QuoteDisplay quote={currentQuote} />

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Today's Drinks
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

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Remember to drink responsibly! 🌟</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
