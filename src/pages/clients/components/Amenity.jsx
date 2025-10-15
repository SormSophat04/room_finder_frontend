import React, { useState } from "react";

function Amenity() {
  // State to manage all amenity values
  const [amenities, setAmenities] = useState({
    wifi: "unavailable",
    parking: "no",
    swimming_pool: "no",
    electric: "included",
    water: "included",
  });

  // A single handler to update the state
  const handleAmenityChange = (amenityName, value) => {
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [amenityName]: value,
    }));
  };

  // Reusable style for the radio button circle
  const radioCircleStyle = (isSelected) =>
    `w-5 h-5 rounded-full border-2 ${
      isSelected ? "border-blue-500 bg-blue-500" : "border-gray-400"
    }`;

  return (
    <div>
      {/* --- Announcement Section --- */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 max-w-md mx-auto">
        <h2 className="text-lg font-semibold text-gray-800">Amenities</h2>

        {/* WiFi Selector */}
        <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
          <span className="text-gray-600">WiFi</span>
          <div className="flex items-center space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="wifi"
                value="available"
                checked={amenities.wifi === "available"}
                onChange={() => handleAmenityChange("wifi", "available")}
                className="hidden"
              />
              <span
                className={radioCircleStyle(amenities.wifi === "available")}
              ></span>
              <span className="ml-2 text-gray-700">Available</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="wifi"
                value="unavailable"
                checked={amenities.wifi === "unavailable"}
                onChange={() => handleAmenityChange("wifi", "unavailable")}
                className="hidden"
              />
              <span
                className={radioCircleStyle(amenities.wifi === "unavailable")}
              ></span>
              <span className="ml-2 text-gray-700">Unavailable</span>
            </label>
          </div>
        </div>

        {/* Parking Selector */}
        <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
          <span className="text-gray-600">Parking</span>
          <div className="flex items-center space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="parking"
                value="yes"
                checked={amenities.parking === "yes"}
                onChange={() => handleAmenityChange("parking", "yes")}
                className="hidden"
              />
              <span
                className={radioCircleStyle(amenities.parking === "yes")}
              ></span>
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="parking"
                value="no"
                checked={amenities.parking === "no"}
                onChange={() => handleAmenityChange("parking", "no")}
                className="hidden"
              />
              <span
                className={radioCircleStyle(amenities.parking === "no")}
              ></span>
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Swimming Pool Selector */}
        <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
          <span className="text-gray-600">Swimming Pool</span>
          <div className="flex items-center space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="swimming_pool"
                value="yes"
                checked={amenities.swimming_pool === "yes"}
                onChange={() => handleAmenityChange("swimming_pool", "yes")}
                className="hidden"
              />
              <span
                className={radioCircleStyle(amenities.swimming_pool === "yes")}
              ></span>
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="swimming_pool"
                value="no"
                checked={amenities.swimming_pool === "no"}
                onChange={() => handleAmenityChange("swimming_pool", "no")}
                className="hidden"
              />
              <span
                className={radioCircleStyle(amenities.swimming_pool === "no")}
              ></span>
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Electric Selector */}
        <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
          <span className="text-gray-600">Electric</span>
          <div className="flex items-center space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="electric"
                value="included"
                checked={amenities.electric === "included"}
                onChange={() => handleAmenityChange("electric", "included")}
                className="hidden"
              />
              <span
                className={radioCircleStyle(amenities.electric === "included")}
              ></span>
              <span className="ml-2 text-gray-700">Included</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="electric"
                value="not_included"
                checked={amenities.electric === "not_included"}
                onChange={() => handleAmenityChange("electric", "not_included")}
                className="hidden"
              />
              <span
                className={radioCircleStyle(
                  amenities.electric === "not_included"
                )}
              ></span>
              <span className="ml-2 text-gray-700">Not Included</span>
            </label>
          </div>
        </div>

        {/* Water Selector */}
        <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
          <span className="text-gray-600">Water</span>
          <div className="flex items-center space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="water"
                value="included"
                checked={amenities.water === "included"}
                onChange={() => handleAmenityChange("water", "included")}
                className="hidden"
              />
              <span
                className={radioCircleStyle(amenities.water === "included")}
              ></span>
              <span className="ml-2 text-gray-700">Included</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="water"
                value="not_included"
                checked={amenities.water === "not_included"}
                onChange={() => handleAmenityChange("water", "not_included")}
                className="hidden"
              />
              <span
                className={radioCircleStyle(amenities.water === "not_included")}
              ></span>
              <span className="ml-2 text-gray-700">Not Included</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amenity;
