import { useState, useEffect } from "react";

interface QuotesData {
  [day: string]: {
    [hour: string]: string;
  };
}

export const useQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState<string>("Loading...");
  const [quotesData, setQuotesData] = useState<QuotesData | null>(null);

  useEffect(() => {
    // Fetch quotes.json
    fetch("/quotes.json")
      .then((response) => response.json())
      .then((data: QuotesData) => setQuotesData(data))
      .catch((error) => console.error("Failed to load quotes", error));
  }, []);

  useEffect(() => {
    if (!quotesData) return;

    const updateQuote = () => {
      const now = new Date();
      const day = now
        .toLocaleString("en-US", { weekday: "long" })
        .toLowerCase();
      const hour = now.getHours().toString();

      const dayQuotes = quotesData[day] as { [key: string]: string };
      if (dayQuotes && dayQuotes[hour]) {
        setCurrentQuote(dayQuotes[hour]);
      } else {
        setCurrentQuote("No quote available for this time.");
      }
    };

    // Update the quote initially
    updateQuote();

    // Set up an interval to update the quote every hour
    const interval = setInterval(updateQuote, 60 * 60 * 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [quotesData]);

  return { currentQuote };
};
