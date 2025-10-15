import React from 'react';

// HeartIcon Component for the favorite button
const HeartIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Main Favorite Component
function Favorite() {
  // Mock data for favorite items. In a real app, this would come from state or props.
  const favoriteItems = [
    {
      id: 1,
      name: 'Kyoto, Japan',
      description: 'Ancient temples, beautiful gardens, and traditional geishas.',
      imageUrl: 'https://placehold.co/600x400/DBEAFE/313D4F?text=Kyoto'
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      description: 'Iconic blue-domed churches and stunning sunset views.',
      imageUrl: 'https://placehold.co/600x400/D1FAE5/313D4F?text=Santorini'
    },
    {
      id: 3,
      name: 'Amalfi Coast, Italy',
      description: 'Dramatic cliffs, pastel-colored villages, and sparkling seas.',
      imageUrl: 'https://placehold.co/600x400/FEF3C7/313D4F?text=Amalfi+Coast'
    },
    {
      id: 4,
      name: 'Bora Bora, French Polynesia',
      description: 'Overwater bungalows in a paradise of turquoise lagoons.',
      imageUrl: 'https://placehold.co/600x400/FCE7F3/313D4F?text=Bora+Bora'
    },
    {
      id: 5,
      name: 'Banff National Park, Canada',
      description: 'Majestic mountains, glacier-fed lakes, and abundant wildlife.',
      imageUrl: 'https://placehold.co/600x400/E0E7FF/313D4F?text=Banff'
    },
    {
      id: 6,
      name: 'Machu Picchu, Peru',
      description: 'The mysterious and breathtaking ancient Incan citadel.',
      imageUrl: 'https://placehold.co/600x400/F3E8FF/313D4F?text=Machu+Picchu'
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
            Favorite Destinations
          </h1>
        </header>

        {/* Grid of Favorite Items */}
        {favoriteItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                   <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300">
                      <HeartIcon className="w-6 h-6" />
                   </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                  <p className="text-gray-600 flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State Message
          <div className="text-center py-20 px-6 bg-white rounded-lg shadow-md">
            <HeartIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Favorites Yet</h2>
            <p className="text-gray-500">
              Start exploring and add some items to your favorites list!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorite;
