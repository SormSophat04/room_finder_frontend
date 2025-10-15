import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// --- SVG Icons for the Detail Page ---
const ArrowLeftIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);
const TelegramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-2.428 24-11.326z" />
  </svg>
);
const StarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const LocationMarkerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-1 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const WifiIcon = () => (
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
      d="M8.111 16.555a5.5 5.5 0 017.778 0M12 20.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.222 12.333a11.111 11.111 0 0115.556 0"
    />
  </svg>
);
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
const ParkingIcon = () => (
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
      d="M12 2a2 2 0 00-2 2v16a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-4 0v3a2 2 0 002 2h1a2 2 0 002-2V4a2 2 0 00-2-2h-1z"
    />
  </svg>
);
const PoolIcon = () => (
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
      d="M3.5 9.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm12 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM7 16h10"
    />
  </svg>
);

// --- Recommendation Card Component (re-used from Home page) ---
const Card = ({ title, location, price, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-36 sm:h-48 object-cover"
    />
    <div className="p-3">
      <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 truncate">
        {title}
      </h3>
      <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
        <LocationMarkerIcon />
        <span className="truncate">{location}</span>
      </div>
      <p className="text-base font-semibold text-blue-600">{price}</p>
    </div>
  </div>
);

// --- Main Detail Page Component ---
function Detail({ products }) {
  // --- Mock Data for property details (amenities, owner, description) ---
  const propertyDetails = {
    rating: 4.98,
    reviews: 125,
    description:
      "Escape to this stunning modern villa offering breathtaking panoramic ocean views from every room. With a sleek, open-concept design, private infinity pool, and state-of-the-art amenities, this is the ultimate luxury getaway. Perfect for families or a romantic retreat.",
    owner: {
      name: "Alicia Keys",
      avatarUrl: "https://placehold.co/100x100/E2E8F0/4A5568?text=Owner",
      isSuperhost: true,
    },
    amenities: [
      { name: "Fast Wifi", icon: <WifiIcon /> },
      { name: "Free Parking", icon: <ParkingIcon /> },
      { name: "Infinity Pool", icon: <PoolIcon /> },
    ],
  };

  const recommendations = [
    {
      id: 1,
      title: "Cozy Beachfront Cottage",
      location: "Santa Monica",
      price: "$350/mo",
      imageUrl: "https://placehold.co/600x400/BEE3F8/2C5282?text=Rec+1",
    },
    {
      id: 2,
      title: "Downtown LA Loft",
      location: "Los Angeles",
      price: "$200/mo",
      imageUrl: "https://placehold.co/600x400/C6F6D5/2F855A?text=Rec+2",
    },
    {
      id: 3,
      title: "Hollywood Hills Hideaway",
      location: "Hollywood",
      price: "$500/mo",
      imageUrl: "https://placehold.co/600x400/FED7D7/9B2C2C?text=Rec+3",
    },
    {
      id: 4,
      title: "Rustic Mountain Cabin",
      location: "Big Bear Lake",
      price: "$250/mo",
      imageUrl: "https://placehold.co/600x400/FEEBC8/975A16?text=Rec+4",
    },
  ];

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // Ensure product.images is an array, default to an empty array if not defined
  const productImages = product?.images || [];

  // ** NEW: State for the currently displayed main image **
  const [activeImage, setActiveImage] = useState(() => productImages[0] || "");

  // ** NEW: Set the active image when the component loads or product changes **
  useEffect(() => {
    if (productImages.length > 0) {
      setActiveImage(productImages[0]);
    }
  }, [productImages]);
  
  // A check to prevent crashing if the product ID is not found
  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* --- Back to Home Link --- */}
        <div className="mb-4 flex items-center justify-between relative">
          <Link
            to="/"
            className="inline-flex bg-gray-200 py-2 px-4 rounded-lg items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 group font-semibold"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </Link>
          <button className="bg-gray-200 backdrop-blur-sm p-2 rounded-full text-black hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300">
            <HeartIcon className="w-6 h-6" />
          </button>
        </div>

        {/* --- Layout: Images left (desktop) / Details right --- */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left: Image gallery */}
          <div className="w-full lg:w-2/3">
            {productImages.length > 0 ? (
              <>
                <div className="bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                    src={activeImage}
                    alt="Main product view"
                    className="w-full h-94 lg:h-160 object-cover"
                  />
                </div>

                {productImages.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {productImages.map((img, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveImage(img)}
                        className="flex-shrink-0"
                        aria-label={`Thumbnail ${index + 1}`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md transition-all duration-200 ${
                            activeImage === img
                              ? "border-2 border-blue-600 p-1"
                              : "opacity-70 hover:opacity-100"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="h-64 flex items-center justify-center bg-gray-200 rounded-xl text-gray-600 text-xl font-semibold">
                No images available
              </div>
            )}
          </div>

          {/* Right: Title / meta / booking box */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-xl border border-gray-300 sticky top-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
              <div className="flex items-center text-gray-600 mb-3">
                <LocationMarkerIcon />
                <span className="truncate">{product.location || product.type}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-2xl font-bold text-gray-800">
                  ${product.price}
                  <span className="text-base font-normal text-gray-500"> /month</span>
                </p>
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-bold">{propertyDetails.rating}</span>
                </div>
              </div>

              <div className="flex items-center my-4">
                <img src={propertyDetails.owner.avatarUrl} alt={propertyDetails.owner.name} className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <p className="font-bold text-gray-800">{propertyDetails.owner.name}</p>
                  {propertyDetails.owner.isSuperhost && (
                    <p className="text-sm text-purple-600 font-semibold">Superhost</p>
                  )}
                </div>
              </div>

              <button className="w-full mb-2 py-3 bg-blue-400 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
                <span>Tel {propertyDetails.owner.tel || "082828277"}</span>
              </button>
              <button className="w-full py-3 bg-blue-400 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                <TelegramIcon />
                <span>Contact Owner</span>
              </button>
            </div>
          </div>
        </div>

        {/* --- Details below (full width): Amenities & Description --- */}
        <div className="w-full">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {propertyDetails.amenities.map((amenity) => (
                <div key={amenity.name} className="flex items-center space-x-3 text-gray-700">
                  {amenity.icon}
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="my-6" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{propertyDetails.description}</p>
          <hr className="my-6" />
        </div>

        {/* --- Recommendations Section --- */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            You might also like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendations.map((rec) => (
              <Card key={rec.id} {...rec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;