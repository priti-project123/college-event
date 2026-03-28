import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, percentage, isIncrease }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm font-medium mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold text-gray-800">{value}</span>
        <span
          className={`flex items-center text-sm font-medium ${
            isIncrease ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isIncrease ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default StatCard;
