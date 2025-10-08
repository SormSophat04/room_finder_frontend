import React from "react";
import BalanceCard from "./BalanceCard";
import TransactionList from "./TransactionList";
import SendMoneyItem from "./SendMoneyItem";

function MainContent() {
  const ActivityChart = () => (
    <div className="h-64">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "rgba(236, 72, 153, 0.4)" }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(139, 92, 246, 0.0)" }}
            />
          </linearGradient>
        </defs>
        <path
          d="M0,100 C50,50 150,150 200,100 S300,0 350,50 S450,120 500,80"
          stroke="url(#paint0_linear_1_2)"
          strokeWidth="3"
          fill="url(#gradient)"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_2"
            x1="0"
            y1="75"
            x2="500"
            y2="75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC4899" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <line x1="0" y1="148" x2="500" y2="148" stroke="#333" strokeWidth="1" />
        <text x="5" y="140" fill="#777" fontSize="12">
          A month ago
        </text>
        <text x="460" y="140" fill="#777" fontSize="12">
          Today
        </text>
      </svg>
    </div>
  );
  const BellIcon = () => (
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
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
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
  const GlobeIcon = () => (
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    </Icon>
  );
  const SmartphoneIcon = () => (
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
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    </Icon>
  );
  const USFlag = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      width="40"
      height="40"
    >
      <path fill="#b22234" d="M0 0h60v30H0z" />
      <path fill="#fff" d="M0 3h60v3H0zm0 6h60v3H0zm0 6h60v3H0zm0 6h60v3H0z" />
      <path fill="#3c3b6e" d="M0 0h24v15H0z" />
      <g fill="#fff">
        <g id="d">
          <g id="c">
            <g id="b">
              <path
                id="a"
                d="M0-1l.22.68h.7L.36.12l.22.68L0 .34-.58.8-.36.12-.92-.58h.7z"
                transform="scale(.6)"
              />
              <use href="#a" transform="rotate(72)" />
              <use href="#a" transform="rotate(144)" />
              <use href="#a" transform="rotate(216)" />
              <use href="#a" transform="rotate(288)" />
            </g>
            <use href="#a" transform="rotate(72)" />
            <use href="#a" transform="rotate(144)" />
            <use href="#a" transform="rotate(216)" />
            <use href="#a" transform="rotate(288)" />
          </g>
          <use href="#c" y="2" />
          <use href="#c" y="4" />
        </g>
        <g id="e">
          <use href="#d" x="2" />
          <use href="#d" x="4" />
        </g>
        <use href="#e" y="1" />
        <use href="#e" y="2" />
        <use href="#e" y="3" />
        <use href="#e" y="4" />
      </g>
    </svg>
  );
  const EUFlag = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      width="40"
      height="40"
    >
      <path fill="#039" d="M0 0h60v30H0z" />
      <g fill="#fc0" transform="translate(30 15)scale(1.2)">
        <g id="eu-a">
          <g id="eu-b">
            <path id="eu-c" d="M0-8l2.5 7.5-6.5-4.5h8l-6.5 4.5z" />
            <use href="#eu-c" transform="scale(-1 1)" />
          </g>
          <use href="#eu-b" transform="rotate(72)" />
          <use href="#eu-b" transform="rotate(144)" />
        </g>
        <use href="#eu-a" transform="rotate(-72)" />
        <use href="#eu-a" transform="rotate(-144)" />
      </g>
    </svg>
  );
  const UKFlag = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      width="40"
      height="40"
    >
      <clipPath id="a">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <g clipPath="url(#a)">
        <path d="M0 0v30h60V0z" fill="#00247d" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#cf142b" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#cf142b" strokeWidth="6" />
      </g>
    </svg>
  );

  const Icon = ({ children }) => <span className="w-6 h-6">{children}</span>;
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard{" "}
          {/* <span role="img" aria-label="waving hand">
            👋
          </span> */}
        </h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-[#1A1A1A] hover:bg-gray-700">
            <BellIcon />
          </button>
          <img
            src="https://placehold.co/40x40/6A5AF9/FFFFFF?text=BC"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <BalanceCard
          currency="US dollar"
          amount="4558"
          flag={<USFlag />}
          percentage={33}
          chartColor="text-pink-500"
        />
        <BalanceCard
          currency="Euro"
          amount="2670"
          flag={<EUFlag />}
          percentage={12}
          chartColor="text-yellow-500"
        />
        <BalanceCard
          currency="Pound"
          amount="5590"
          flag={<UKFlag />}
          percentage={33}
          chartColor="text-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-[#1A1A1A] p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Send Money</h2>
            <div className="flex items-center space-x-2">
              <select className="bg-[#0D0D0D] text-white p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6A5AF9]">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
              <button className="bg-[#6A5AF9] px-4 py-2 rounded-md font-semibold hover:bg-[#5a4af1]">
                Send
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-4">1 USD = 104.00 BDT</p>
          <ActivityChart />
        </div>
        <div className="bg-[#1A1A1A] p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Transactions</h2>
            <select className="bg-[#0D0D0D] text-white p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6A5AF9]">
              <option>Month</option>
              <option>Week</option>
              <option>Day</option>
            </select>
          </div>
          <TransactionList />
        </div>
      </div>

      <div className="mt-6 bg-[#1A1A1A] p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Send Money</h2>
          <a href="#" className="text-[#6A5AF9] font-semibold hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SendMoneyItem
            icon={<BriefcaseIcon />}
            title="Salary"
            subtitle="Regular Payment"
            amount="3500"
            currency="US dollar"
            color="bg-purple-600"
          />
          <SendMoneyItem
            icon={<GlobeIcon />}
            title="Web Project"
            subtitle="Unregular Payment"
            amount="6500"
            currency="Euro"
            color="bg-green-500"
          />
          <SendMoneyItem
            icon={<SmartphoneIcon />}
            title="App Project"
            subtitle="Regular Payment"
            amount="1200"
            currency="Pound"
            color="bg-indigo-500"
          />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
