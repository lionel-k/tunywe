import { useState, useEffect } from "react";

const quotes = [
  "It's five o'clock somewhere... probably on Mars!",
  "I don't always drink water, but when I do, I prefer it fermented.",
  "Save water, drink beer! 🍺",
  "Wine not have another?",
  "You can't buy happiness, but you can prepare a cocktail, and that's kind of the same thing.",
  "I'm not drunk, I'm just chemically enhanced!",
  "Time to wine down!",
  "Beer today, gone tomorrow!",
];

export const useQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    const updateQuote = () => {
      const hour = new Date().getHours();
      const index = Math.floor((hour / 24) * quotes.length);
      setCurrentQuote(quotes[index]);
    };

    updateQuote();
    const interval = setInterval(updateQuote, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return { currentQuote };
};
