import { useState, useEffect } from "react";

interface DrinkingStats {
  today: number;
  week: number;
  month: number;
}

const STORAGE_KEY = "drinkingStats";

const getInitialStats = (): DrinkingStats => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = JSON.parse(stored);
    const lastUpdate = new Date(parsed.lastUpdate);
    const now = new Date();

    // Reset daily stats if it's a new day
    if (lastUpdate.getDate() !== now.getDate()) {
      parsed.stats.today = 0;
    }

    // Reset weekly stats if it's a new week
    const lastWeek = getWeekNumber(lastUpdate);
    const currentWeek = getWeekNumber(now);
    if (lastWeek !== currentWeek) {
      parsed.stats.week = 0;
    }

    // Reset monthly stats if it's a new month
    if (lastUpdate.getMonth() !== now.getMonth()) {
      parsed.stats.month = 0;
    }

    return parsed.stats;
  }
  return { today: 0, week: 0, month: 0 };
};

const getWeekNumber = (date: Date): number => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear =
    (date.getTime() - firstDayOfYear.getTime()) / (1000 * 60 * 60 * 24);
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

export const useDrinkingStats = () => {
  const [stats, setStats] = useState<DrinkingStats>(getInitialStats);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        stats,
        lastUpdate: new Date().toISOString(),
      })
    );
  }, [stats]);

  const addDrink = () => {
    setStats((prev) => ({
      today: prev.today + 1,
      week: prev.week + 1,
      month: prev.month + 1,
    }));
  };

  const removeDrink = () => {
    setStats((prev) => ({
      today: Math.max(0, prev.today - 1),
      week: Math.max(0, prev.week - 1),
      month: Math.max(0, prev.month - 1),
    }));
  };

  return { stats, addDrink, removeDrink };
};
