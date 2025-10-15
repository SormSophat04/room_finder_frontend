import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import Amenity from "./components/Amenity";

// --- Google Map Configuration ---
const mapContainerStyle = {
  width: "100%",
  height: "250px",
  borderRadius: "0.5rem",
};
const initialCenter = {
  lat: 11.5564,
  lng: 104.9282,
};
const libraries = ["places"];

// --- React Component ---
function Post() {
  // --- UNCHANGED: Original form data state ---
  const [formData, setFormData] = useState({
    owner_id: 1,
    title: "",
    description: "",
    price: "",
    capacity: "", // Note: This field exists in state but not in the new UI
    address: {
      city: "Phnom Penh",
      district: "",
      commune: "",
      address_details: "",
    },
    amenities: {
      // Note: These fields exist in state but not in the new UI
      wifi: "unavailable",
      parking: "no",
      swimming_pool: "no",
      electric: "included",
      water: "included",
    },
    category: {
      // Note: These fields exist in state but not in the new UI
      type: "Apartment",
      give_in: "",
      width: "",
      floor: "",
    },
    images: [],
  });

  // --- NEW: Local state for UI elements not in original formData ---
  const [condition, setCondition] = useState("Used");
  const [imagePreviews, setImagePreviews] = useState([]);
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const MAX_IMAGES = 8;
  const [imageLimitExceeded, setImageLimitExceeded] = useState(false);

  // --- UNCHANGED: Google Maps state and setup ---
  const [mapCenter, setMapCenter] = useState(initialCenter);
  const [markerPosition, setMarkerPosition] = useState(initialCenter);
  const [autocomplete, setAutocomplete] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDea98HFLRmTxoKdv6mnleJA54V2Az6Iwo", // <-- PASTE YOUR API KEY HERE
    libraries,
  });

  // --- UNCHANGED: Handlers and Callbacks ---
  const fetchAddress = useCallback((lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results[0]) {
        const address = results[0];
        setFormData((prevState) => ({
          ...prevState,
          address: {
            ...prevState.address,
            address_details: address.formatted_address || "",
          },
        }));
      } else {
        console.error("Geocoder failed due to: " + status);
      }
    });
  }, []);

  const onAutocompleteLoad = useCallback((autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  }, []);

  const onPlaceChanged = useCallback(() => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setMapCenter({ lat, lng });
        setMarkerPosition({ lat, lng });
        fetchAddress(lat, lng);
      }
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  }, [autocomplete, fetchAddress]);

  const handleMapClick = useCallback(
    (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setMarkerPosition({ lat, lng });
      fetchAddress(lat, lng);
    },
    [fetchAddress]
  );

  const handleMarkerDragEnd = useCallback(
    (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setMarkerPosition({ lat, lng });
      fetchAddress(lat, lng);
    },
    [fetchAddress]
  );

  const inputStyle =
    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNestedChange = (parent, e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [parent]: { ...prevState[parent], [name]: value },
    }));
  };

  // --- UPDATED: handleFileChange with preview logic ---
  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files || []);

    // If user selected more than MAX_IMAGES, keep only the first MAX_IMAGES and flag limit
    if (filesArray.length > MAX_IMAGES) {
      setImageLimitExceeded(true);
    } else {
      setImageLimitExceeded(false);
    }

    const limitedFiles = filesArray.slice(0, MAX_IMAGES);

    // Store the actual files in formData for submission (limited)
    setFormData((prevState) => ({ ...prevState, images: limitedFiles }));

    // Clean up old previews to prevent memory leaks
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));

    // Create new preview URLs (limited)
    const newPreviews = limitedFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(newPreviews);

    // Set the first image as the main preview
    if (newPreviews.length > 0) {
      setMainImagePreview(newPreviews[0]);
    } else {
      setMainImagePreview(null);
    }
  };

  const clearImages = () => {
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    setImagePreviews([]);
    setMainImagePreview(null);
    setFormData((prev) => ({ ...prev, images: [] }));
    setImageLimitExceeded(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalFormData = {
      ...formData,
      location: {
        lat: markerPosition.lat,
        lng: markerPosition.lng,
      },
    };
    console.log("Form Data:", finalFormData);
    alert("Form data has been logged to the console. See the developer tools.");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-gray-50 mt-2 mb-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* --- Photo Section with Preview --- */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                Photo
              </h2>
              {/* <p className="text-sm text-gray-500">The first image will be the main one.</p> */}
            </div>
            {imagePreviews.length > 0 && (
              <div className="flex items-center space-x-3">
                <label
                  htmlFor="images"
                  className="cursor-pointer text-sm font-semibold text-white bg-blue-400 hover:bg-blue-500 py-1 px-2 rounded"
                >
                  Change
                  <input
                    accept="image/*"
                    type="file"
                    id="images"
                    name="images"
                    onChange={handleFileChange}
                    multiple
                    className="hidden"
                  />
                </label>
                <button
                  type="button"
                  onClick={clearImages}
                  className="text-sm text-white bg-red-400 hover:bg-red-500 py-1 px-2 rounded"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          <div className="mt-4">
            {imagePreviews.length === 0 ? (
              <label
                htmlFor="images"
                className="flex justify-center items-center w-full h-48 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
              >
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="font-medium text-gray-600">
                    Add Photos (up to 8)
                  </span>
                </span>
                <input
                  accept="image/*"
                  type="file"
                  id="images"
                  name="images"
                  onChange={handleFileChange}
                  multiple
                  className="hidden"
                />
              </label>
            ) : (
              <div className="space-y-4">
                <div className="w-full h-72 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={mainImagePreview}
                    alt="Main preview"
                    className="object-cover w-full h-full"
                  />
                </div>
                {imageLimitExceeded && (
                  <p className="text-sm text-red-600">
                    You selected more than {MAX_IMAGES} images — only the first{" "}
                    {MAX_IMAGES} were kept.
                  </p>
                )}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                  {imagePreviews.map((url, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setMainImagePreview(url)}
                      className={`relative w-full aspect-square rounded-md overflow-hidden border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        mainImagePreview === url
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- Detail Post Section --- */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Detail Post</h2>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type <span className="text-red-500">*</span>
            </label>
            <select id="brand" name="brand" className={inputStyle}>
              <option></option>
              <option>Room</option>
              <option>House</option>
              <option>Apartment</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">Capacity <span className="text-red-500">*</span></label>
              <select id="brand" name="brand" className={inputStyle}><option></option><option>1</option><option>2</option><option>3</option></select>
            </div> */}
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Badroom <span className="text-red-500">*</span>
              </label>
              <select id="brand" name="brand" className={inputStyle}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Bathroom <span className="text-red-500">*</span>
              </label>
              <select id="brand" name="brand" className={inputStyle}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Width <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">
                    m<sup>2</sup>
                  </span>
                </div>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className={`${inputStyle} pl-9`}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Condition <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setCondition("Used")}
                  className={`w-full py-2 rounded-md text-sm font-medium border ${
                    condition === "Used"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  Used
                </button>
                <button
                  type="button"
                  onClick={() => setCondition("New")}
                  className={`w-full py-2 rounded-md text-sm font-medium border ${
                    condition === "New"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  New
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className={`${inputStyle} pl-7`}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="discount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Discount
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="discount"
                  name="discount"
                  className={`${inputStyle} pr-16`}
                  min="0"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <select className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                    <option>%</option>
                    <option>$</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={inputStyle}
              required
            ></textarea>
          </div>
        </div>

        <Amenity />

        {/* --- Locations Section --- */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Locations</h2>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Choose city <span className="text-red-500">*</span>
            </label>
            <select id="location" name="location" className={inputStyle}>
              <option></option>
              <option>Siem Reap</option>
              <option>Sihanoukville</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Choose district <span className="text-red-500">*</span>
            </label>
            <select id="location" name="location" className={inputStyle}>
              <option></option>
              <option>Siem Reap</option>
              <option>Sihanoukville</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Choose commune <span className="text-red-500">*</span>
            </label>
            <select id="location" name="location" className={inputStyle}>
              <option></option>
              <option>Siem Reap</option>
              <option>Sihanoukville</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="address_details"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address_details"
              name="address_details"
              value={formData.address.address_details}
              onChange={(e) => handleNestedChange("address", e)}
              rows="2"
              className={inputStyle}
              placeholder="Enter full address or set on map"
            ></textarea>
          </div>
          <div>
            {isLoaded ? (
              <>
                <Autocomplete
                  onLoad={onAutocompleteLoad}
                  onPlaceChanged={onPlaceChanged}
                >
                  <input
                    type="text"
                    placeholder="Set Location on Google Maps"
                    className={`${inputStyle} mb-2`}
                  />
                </Autocomplete>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={mapCenter}
                  zoom={14}
                  onClick={handleMapClick}
                >
                  <Marker
                    position={markerPosition}
                    draggable={true}
                    onDragEnd={handleMarkerDragEnd}
                  />
                </GoogleMap>
              </>
            ) : (
              <div className="w-full h-[250px] flex items-center justify-center bg-gray-200 rounded-lg">
                <p>Loading Map...</p>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Post;
