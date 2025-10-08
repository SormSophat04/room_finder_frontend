import React from "react";

function TransactionList() {
  const UserCircleIcon = () => (
    <Icon>
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
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    </Icon>
  );
  const BriefcaseIcon = () => (
    <Icon>
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
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    </Icon>
  );
  const UtensilsIcon = () => (
    <Icon>
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
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" />
      </svg>
    </Icon>
  );
  const Icon = ({ children }) => <span className="w-6 h-6">{children}</span>;
  const transactions = [
    {
      icon: <UserCircleIcon />,
      name: "Jane Cooper",
      date: "08 Sep, 2022",
      amount: 1200,
      currency: "US dollar",
      type: "income",
    },
    {
      icon: <UserCircleIcon />,
      name: "Leslie Alexander",
      date: "08 Sep, 2022",
      amount: 2890,
      currency: "Euro",
      type: "income",
    },
    {
      icon: <BriefcaseIcon />,
      name: "Flight Ticket",
      date: "08 Sep, 2022",
      amount: 1000,
      currency: "Pound",
      type: "expense",
    },
    {
      icon: <UserCircleIcon />,
      name: "Robert Fox",
      date: "08 Sep, 2022",
      amount: 2250,
      currency: "US dollar",
      type: "income",
    },
    {
      icon: <UtensilsIcon />,
      name: "KFC",
      date: "08 Sep, 2022",
      amount: 120,
      currency: "Euro",
      type: "expense",
    },
    {
      icon: <UserCircleIcon />,
      name: "Jacob Jones",
      date: "08 Sep, 2022",
      amount: 1700,
      currency: "US dollar",
      type: "income",
    },
    {
      icon: <UserCircleIcon />,
      name: "Dev Cooper",
      date: "08 Sep, 2022",
      amount: 4500,
      currency: "Pound",
      type: "income",
    },
  ];
  return (
    <div className="space-y-4">
      {transactions.map((t, i) => (
        <div key={i} className="flex items-center">
          <div className="p-3 rounded-lg bg-gray-700 mr-4">{t.icon}</div>
          <div className="flex-1">
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-400">{t.date}</p>
          </div>
          <div>
            <p
              className={`font-bold text-right ${
                t.type === "income" ? "text-green-400" : "text-red-400"
              }`}
            >
              {t.type === "income" ? "+" : "-"} {t.amount}
            </p>
            <p className="text-sm text-gray-400 text-right">{t.currency}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
