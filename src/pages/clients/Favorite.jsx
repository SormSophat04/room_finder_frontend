import React from 'react';

// Sample data updated to match the new card design from the image.
const favoriteItems = [
  {
    id: 1,
    imageUrl: 'https://placehold.co/600x400/F3F4F6/374151?text=Modern+Apartment',
    title: 'Modern Apartment',
    location: 'Downtown',
    price: '$1,200/mo',
  },
  {
    id: 2,
    imageUrl: 'https://placehold.co/600x400/F3F4F6/374151?text=Cozy+Cottage',
    title: 'Cozy Cottage',
    location: 'Suburbs',
    price: '$900/mo',
  },
  {
    id: 3,
    imageUrl: 'https://placehold.co/600x400/F3F4F6/374151?text=Luxury+Villa',
    title: 'Luxury Villa',
    location: 'Riverside',
    price: '$2,500/mo',
  },
  {
    id: 4,
    imageUrl: 'https://placehold.co/600x400/F3F4F6/374151?text=Student+Dorm',
    title: 'Student Dorm',
    location: 'University District',
    price: '$600/mo',
  },
  {
    id: 5,
    imageUrl: 'https://placehold.co/600x400/F3F4F6/374151?text=Urban+Loft',
    title: 'Urban Loft',
    location: 'Arts District',
    price: '$1,500/mo',
  },
  {
    id: 6,
    imageUrl: 'https://placehold.co/600x400/F3F4F6/374151?text=Beachfront+Bungalow',
    title: 'Beachfront Bungalow',
    location: 'Coastal Way',
    price: '$2,200/mo',
  },
  {
    id: 7,
    imageUrl: 'https://placehold.co/600x400/F3F4F6/374151?text=Suburban+House',
    title: 'Suburban House',
    location: 'Green Valley',
    price: '$1,800/mo',
  },
  {
    id: 8,
    imageUrl: 'https://placehold.co/600x400/F3F4F6/374151?text=Penthouse+Suite',
    title: 'Penthouse Suite',
    location: 'City Center',
    price: '$3,500/mo',
  },
];

// Location pin icon component
const LocationIcon = () => (
    <svg 
        className="w-4 h-4 mr-1.5 text-gray-400" 
        viewBox="0 0 20 20" 
        fill="currentColor"
    >
        <path 
            fillRule="evenodd" 
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
            clipRule="evenodd" 
        />
    </svg>
);


// The FavoriteCard component is updated to match the new design.
function FavoriteCard({ imageUrl, title, location, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <div className="h-36 sm:h-40 bg-gray-200">
          <img className="w-full h-full object-cover" src={imageUrl} alt={title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/ef4444/ffffff?text=Image+Error'; }} />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 truncate">{title}</h3>
        <div className="flex items-center mt-1 text-gray-500">
            <LocationIcon />
            <span className="text-sm">{location}</span>
        </div>
        <p className="mt-3 text-base font-bold text-blue-600">{price}</p>
      </div>
    </div>
  );
}


function Favorite() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Favorite Rooms</h1>
        </header>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {favoriteItems.map((item) => (
            <FavoriteCard
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              location={item.location}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorite;

