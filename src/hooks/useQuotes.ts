import { useState, useEffect } from "react";

const quotes = [
  "Drink water like a champion! Stay fresh.",
  "The best drink is the one you don't have tonight.",
  "Why drink beer when you can drink life? Stay sober!",
  "A clear mind is the best kind of buzz.",
  "Water is the real hero. It's always sober.",
  "No hangover, no problem. Stay dry today!",
  "A sober mind makes the best choices.",
  "Stay strong, stay dry. Your future will thank you.",
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
