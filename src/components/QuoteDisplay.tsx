import React from "react";
import { QuoteIcon } from "lucide-react";

interface QuoteDisplayProps {
  quote: string;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ quote }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 relative overflow-hidden">
      <div className="absolute -right-4 -top-4 text-blue-100">
        <QuoteIcon size={64} />
      </div>
      <p className="text-lg text-gray-700 italic relative z-10">{quote}</p>
    </div>
  );
};

export default QuoteDisplay;
