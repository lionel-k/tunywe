import React from "react";
import { PlusIcon, MinusIcon } from "lucide-react";

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={onDecrement}
        className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        disabled={count === 0}
      >
        <MinusIcon size={20} className="text-gray-600" />
      </button>

      <div className="w-20 text-center">
        <span className="text-3xl font-bold text-blue-500">{count}</span>
      </div>

      <button
        onClick={onIncrement}
        className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors"
      >
        <PlusIcon size={20} className="text-white" />
      </button>
    </div>
  );
};

export default Counter;
