import React from "react";
import { CalendarDaysIcon, CalendarIcon, BarChart3Icon } from "lucide-react";

interface StatsProps {
  stats: {
    today: number;
    week: number;
    month: number;
  };
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  const statItems = [
    { label: "Uno munsi", value: stats.today, icon: CalendarIcon },
    { label: "Iyi ndwi", value: stats.week, icon: CalendarDaysIcon },
    { label: "Uku kwezi", value: stats.month, icon: BarChart3Icon },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {statItems.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="bg-white rounded-xl shadow-md p-4 text-center"
        >
          <Icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-xl font-bold text-gray-800">{value}</p>
          <p className="text-xs font-bold text-gray-800">{value * 2000} Fbu</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
