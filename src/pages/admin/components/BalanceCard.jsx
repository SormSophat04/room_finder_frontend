import React from "react";

function BalanceCard({ currency, amount, flag, percentage, chartColor }) {
  const bars = [10, 20, 40, 60, 30, 50, 25, 35, 70, 45, 15, 65].sort(
    () => Math.random() - 0.5
  );
  const ArrowRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" x2="19" y1="12" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-2xl">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-700">
            {flag}
          </div>
          <div>
            <p className="text-2xl font-bold">{amount}</p>
            <p className="text-gray-400">{currency}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-green-400">
          <ArrowRightIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="mt-4 flex items-end h-10 space-x-1">
        {bars.map((height, i) => (
          <div
            key={i}
            className={`w-full rounded-t-sm ${chartColor} opacity-50`}
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
      <div className="relative pt-1 mt-2">
        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
          <div
            style={{ width: `${percentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
        <p className="text-right text-xs text-gray-400 mt-1">{percentage}%</p>
      </div>
    </div>
  );
}

export default BalanceCard;
