import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // 1. Add new state to manage the mobile search popup
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <a
              href="#"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Room Finder
            </a>
          </div>

          {/* Search, Filter, and Profile */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Bar (Desktop) */}
            <div className="relative hidden md:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300"
              />
            </div>

            {/* Mobile Search Icon */}
            {/* 2. Add onClick to show the mobile search popup */}
            <button
              onClick={() => setIsMobileSearchOpen(true)}
              className="p-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300 md:hidden"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Filter Button and Popup */}
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="p-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V16a1 1 0 01-.293.707l-2 2A1 1 0 0113 18v-6.586l-3.707-3.707A1 1 0 019 7V4z"
                  />
                </svg>
              </button>

              {/* Filter Popup */}
              {isFilterOpen && (
                <>
                  {/* Backdrop & Centering Container */}
                  <div
                    onClick={() => setIsFilterOpen(false)}
                    className="fixed inset-0 z-40 flex items-center justify-center p-4"
                    aria-hidden="true"
                    style={{
                      backdropFilter: "blur(2px)",
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {/* Modal */}
                    <div
                      onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
                      className="relative w-full max-w-sm bg-white rounded-lg shadow-xl p-6"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Filter Options
                      </h3>
                      <form>
                        {/* City Select */}
                        <div className="mb-4">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            ទីតាំង
                          </label>
                          <select
                            id="city"
                            name="city"
                            className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option selected>ជ្រើសរើសទីតាំង</option>
                            <option>ភ្នំពេញ</option>
                            <option>កំពង់ធំ</option>
                            <option>កំពត</option>
                          </select>
                        </div>

                        {/* Position Select */}
                        <div className="mb-4">
                          <label
                            htmlFor="position"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            ប្រភេទ
                          </label>
                          <select
                            id="position"
                            name="position"
                            className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>បន្ទប់ជួល</option>
                            <option>ផ្ទុយ</option>
                            <option>ខុនដូ</option>
                            <option>អាផាតមិន</option>
                          </select>
                        </div>

                        {/* Price Range */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            កំណត់តម្លៃ
                          </label>
                          <div className="flex items-center space-x-3">
                            <div className="w-1/2">
                              <label htmlFor="min-price" className="sr-only">
                                Min Price
                              </label>
                              <input
                                type="number"
                                id="min-price"
                                name="min-price"
                                placeholder="តិចបំផុត"
                                className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <span className="text-gray-500">-</span>
                            <div className="w-1/2">
                              <label htmlFor="max-price" className="sr-only">
                                Max Price
                              </label>
                              <input
                                type="number"
                                id="max-price"
                                name="max-price"
                                placeholder="ច្រើនបំផុត"
                                className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-3">
                          <button
                            type="button"
                            onClick={() => setIsFilterOpen(false)}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsFilterOpen(false);
                              // You can add your filter logic here
                            }}
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                          >
                            OK
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Profile Icon */}
            {/* <Link to="/profile"> */}
              <button className="w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hidden md:block">
                <img
                  src="https://placehold.co/40x40/E2E8F0/4A5568?text=P"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>

      {/* 3. Add the Mobile Search Popup */}
      {isMobileSearchOpen && (
        <div
          onClick={() => setIsMobileSearchOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20"
          aria-hidden="true"
          style={{
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* 4. Modal content with stopPropagation */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-transparent"
          >
            {/* 5. Re-use the search bar styling */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search for rooms, cities..."
                autoFocus
                className="w-full py-3 pl-10 pr-4 text-gray-900 bg-white border-2 border-transparent rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
