import React from 'react'

function SendMoneyItem({ icon, title, subtitle, amount, currency, color }) {
  return (
    <div className="bg-[#0D0D0D] p-4 rounded-xl flex items-center space-x-4">
    <div className={`p-3 rounded-lg ${color}`}>{icon}</div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
    <div className="flex-1 text-right">
      <p className="font-bold text-lg">{amount}</p>
      <p className="text-sm text-gray-400">{currency}</p>
    </div>
  </div>
  )
}

export default SendMoneyItem
