import React from "react";
import { Link } from "react-router-dom";
import Home from "../assets/home-nav.png";
import Camera from "../assets/camera.png";
import User from "../assets/user.png";
import Favorites from "../assets/heart.png";

function MobileNavBar() {
  const navItems = [
    {
      name: "Home",
      to: "/",
      icon: Home,
    },
    {
        name: "Favorites",
        to: "/favorites",
        icon: Favorites,
    },
    {
      name: "Post",
      to: "/post",
      icon: Camera,
    },
    {
      name: "Profile",
      to: "/profile",
      icon: User,
    },
  ];

  return (
    <nav className="fixed rounded-2xl bottom-0 left-0 right-0 bg-gray-100 z-50 lg:hidden mb-1 mx-2">
      <div className="flex justify-around items-stretch gap-2">
        {navItems.map((item) => {
          return (
            <Link
              key={item.name}
              to={item.to || "#"}
              className={`
                flex flex-col items-center justify-center flex-grow 
                rounded-xl py-1.5
              `}
            >
              <div className="">
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-6 h-6 text-white mb-1"
                />
              </div>
              <span
                className={`
                  text-xs font-medium
                  transition-colors duration-300
                  text-gray-800
                `}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNavBar;
