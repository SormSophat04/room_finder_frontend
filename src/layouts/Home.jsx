import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// --- SVG Icons for a cleaner UI ---
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);
const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M5 7h1m-1 4h1m-1 4h1"
    />
  </svg>
);
const VillaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
    />
  </svg>
);
const LocationMarkerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const AllIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

// --- Modern Product Card Component (Optimized for Mobile) ---
const Card = ({ title, location, price }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    {/* Image Placeholder */}
    <div className="bg-gray-200 h-36 sm:h-48 w-full"></div>
    {/* Content */}
    <div className="p-3">
      <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 truncate">
        {title}
      </h3>
      <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
        <LocationMarkerIcon />
        <span>{location}</span>
      </div>
      <p className="text-base font-semibold text-blue-600">{price}</p>
    </div>
  </div>
);

// --- Modern Category Item Component ---
const CategoryItem = ({ label, icon, selected, onClick }) => (
  <div
    className={`flex flex-col items-center justify-center space-y-2 cursor-pointer p-3 rounded-xl transition-all duration-200 flex-shrink-0 w-24 ${
      selected
        ? "bg-blue-500 text-white shadow-md"
        : "hover:bg-gray-200 bg-gray-100"
    }`}
    onClick={onClick}
  >
    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-500">
      {icon}
    </div>
    <span
      className={`text-sm font-semibold ${
        selected ? "text-white" : "text-gray-700"
      }`}
    >
      {label}
    </span>
  </div>
);

// --- Main Home Component ---
function Home({ products }) {
  const [selectedCategory, setSelectedCategory] = useState(0);

  /// Memoized categories to prevent unnecessary re-renders

  const categories = useMemo(
    () => [
      { id: 0, label: "All", icon: <AllIcon /> },
      { id: 1, label: "Houses", icon: <HomeIcon /> },
      { id: 2, label: "Apartments", icon: <BuildingIcon /> },
      { id: 3, label: "Villas", icon: <VillaIcon /> },
      { id: 4, label: "Cottages", icon: <HomeIcon /> },
      { id: 5, label: "Offices", icon: <BuildingIcon /> },
      { id: 6, label: "Mansions", icon: <VillaIcon /> },
      { id: 7, label: "Dorms", icon: <BuildingIcon /> },
      // { id: 8, label: "Flats", icon: <HomeIcon /> },
    ],
    []
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 0) {
      return products;
    }
    const categoryLabel = categories.find(
      (c) => c.id === selectedCategory
    )?.label;
    return products.filter((p) => p.type === categoryLabel);
  }, [selectedCategory, products, categories]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top section for categories - Horizontally scrollable on mobile */}
        <div className="bg-white p-4 rounded-2xl shadow-sm mb-12">
          <div className="flex space-x-4 overflow-x-auto pb-2 -mb-2 md:grid md:grid-cols-8 md:gap-4 md:space-x-0 md:pb-0">
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                label={category.label}
                icon={category.icon}
                selected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>
        </div>

        {/* Main content section for product cards */}
        <main>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Featured Listings
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Link to={`/detail/${product.id}`} key={product.id}>
                <Card
                  key={product.id}
                  title={product.title}
                  location={product.location}
                  price={product.price}
                />
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
