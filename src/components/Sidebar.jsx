import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/house.png";

function Sidebar() {
  const Icon = ({ children }) => <span className="w-6 h-6">{children}</span>;

  const LayoutDashboardIcon = () => (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    </Icon>
  );

  const BarChartIcon = () => (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    </Icon>
  );

  const CreditCardIcon = () => (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    </Icon>
  );

  const SettingsIcon = () => (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </Icon>
  );

  const Settings2Icon = () => (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    </Icon>
  );

  const HelpCircleIcon = () => (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    </Icon>
  );

  const LogOutIcon = () => (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" x2="9" y1="12" y2="12" />
      </svg>
    </Icon>
  );

  // Define menu items and routes
  const navItems = [
    { icon: <LayoutDashboardIcon />, name: "Overview", path: "/admin/manage", end: true },
    { icon: <BarChartIcon />, name: "Users", path: "/admin/manage/users" },
    { icon: <CreditCardIcon />, name: "Rooms", path: "/admin/manage/products" },
    { icon: <SettingsIcon />, name: "Manage", path: "/admin/manage/settings" },
    // { icon: <Settings2Icon />, name: "Settings", path: "/admin/manage" },
    // { icon: <HelpCircleIcon />, name: "Support", path: "/admin/manage" },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-[#1A1A1A] p-6 flex flex-col justify-between rounded-r-2xl">
      <div>
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-10">
          <img className="w-8 h-8" src={Logo} alt="Logo" />
          <span className="text-2xl pt-2 font-bold text-white">Room Finder</span>
        </div>

        {/* User Info */}
        <div className="text-center mb-10">
          <img
            src="https://placehold.co/100x100/6A5AF9/FFFFFF?text=BC"
            alt="Bessie Cooper"
            className="w-28 h-30 object-cover rounded-3xl mx-auto mb-4 border-2 border-[#6A5AF9]"
          />
          <h3 className="text-xl font-semibold text-white">Bessie Cooper</h3>
          <p className="text-gray-400 text-sm">UI/UX Designer</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#6A5AF9] text-white shadow-lg"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Sign Out */}
      <NavLink
        to="/logout"
        className={({ isActive }) =>
          `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            isActive
              ? "bg-red-600 text-white shadow-lg"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }`
        }
      >
        <LogOutIcon />
        <span className="font-medium">Sign Out</span>
      </NavLink>
    </aside>
  );
}

export default Sidebar;
