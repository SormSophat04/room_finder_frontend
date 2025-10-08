import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// --- Google Map Configuration ---
// Defines the size of the map container.
const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem'
};

// Sets the initial center of the map to Phnom Penh.
const initialCenter = {
  lat: 11.5564,
  lng: 104.9282
};

// Specifies which Google Maps libraries to load.
const libraries = ['places'];

// --- React Component ---
function Post() {
  // State for all form data, mirroring the JSON structure.
  const [formData, setFormData] = useState({
    owner_id: 1,
    title: '',
    description: '',
    price: '',
    capacity: '',
    address: {
      city: 'Phnom Penh',
      district: '',
      commune: '',
      address_details: ''
    },
    amenities: {
      wifi: 'unavailable',
      parking: 'no',
      swimming_pool: 'no',
      electric: 'included',
      water: 'included'
    },
    category: {
      type: 'Apartment',
      give_in: '',
      width: '',
      floor: ''
    },
    images: []
  });

  // State to track the position of the marker on the map.
  const [markerPosition, setMarkerPosition] = useState(initialCenter);

  // Hook to load the Google Maps JavaScript API script.
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDea98HFLRmTxoKdv6mnleJA54V2Az6Iwo", // <-- PASTE YOUR API KEY HERE
    libraries
  });

  // Function to perform reverse geocoding (lat/lng -> address).
  // Wrapped in useCallback for performance optimization.
  const fetchAddress = useCallback((lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const address = results[0];
        const addressComponents = address.address_components;

        // Helper function to extract specific parts of the address.
        const getAddressComponent = (type) => {
          const component = addressComponents.find(c => c.types.includes(type));
          return component ? component.long_name : '';
        };

        // Update the form's address state with the new data.
        setFormData(prevState => ({
          ...prevState,
          address: {
            city: getAddressComponent('locality') || '',
            district: getAddressComponent('administrative_area_level_2') || '',
            commune: getAddressComponent('sublocality_level_1') || '',
            address_details: address.formatted_address || ''
          }
        }));
      } else {
        console.error('Geocoder failed due to: ' + status);
      }
    });
  }, []);

  // Handler for when the user clicks on the map.
  const handleMapClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
    fetchAddress(lat, lng);
  }, [fetchAddress]);

  // Handler for when the user finishes dragging the marker.
  const handleMarkerDragEnd = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
    fetchAddress(lat, lng);
  }, [fetchAddress]);

  // --- General Form Handlers ---
  const inputStyle = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleNestedChange = (parent, e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [parent]: { ...prevState[parent], [name]: value }
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({ ...prevState, images: Array.from(e.target.files) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form data has been logged to the console. See the developer tools.');
  };

  // --- JSX Rendering ---
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white shadow-lg rounded-lg my-10">
      {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Create a New Posting 🏡
      </h1> */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Basic Information */}
        <fieldset className="border border-gray-300 rounded-lg p-6 bg-gray-50/50">
          <legend className="text-xl font-semibold text-blue-600 px-2">Basic Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className={inputStyle} required />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3" className={inputStyle} required></textarea>
            </div>
            <div>
              <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Price (USD)</label>
              <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} min="0" step="0.01" className={inputStyle} required />
            </div>
            <div>
              <label htmlFor="capacity" className="block text-gray-700 font-medium mb-2">Capacity (people)</label>
              <input type="number" id="capacity" name="capacity" value={formData.capacity} onChange={handleChange} min="1" className={inputStyle} required />
            </div>
          </div>
        </fieldset>

        {/* Address & Map */}
        <fieldset className="border border-gray-300 rounded-lg p-6 bg-gray-50/50">
          <legend className="text-xl font-semibold text-blue-600 px-2">Address</legend>
          <div className="mt-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Drag the marker or click on the map to set the location. Address fields will update automatically.</p>
            {isLoaded ? (
              <GoogleMap mapContainerStyle={mapContainerStyle} center={initialCenter} zoom={14} onClick={handleMapClick}>
                <Marker position={markerPosition} draggable={true} onDragEnd={handleMarkerDragEnd} />
              </GoogleMap>
            ) : (
              <div className="w-full h-[400px] flex items-center justify-center bg-gray-200 rounded-lg"><p>Loading Map...</p></div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
              <input type="text" id="city" name="city" value={formData.address.city} onChange={(e) => handleNestedChange('address', e)} className={`${inputStyle} bg-gray-100 cursor-not-allowed`} readOnly />
            </div>
            <div>
              <label htmlFor="district" className="block text-gray-700 font-medium mb-2">District / Khan</label>
              <input type="text" id="district" name="district" value={formData.address.district} onChange={(e) => handleNestedChange('address', e)} className={`${inputStyle} bg-gray-100 cursor-not-allowed`} readOnly />
            </div>
            <div>
              <label htmlFor="commune" className="block text-gray-700 font-medium mb-2">Commune / Sangkat</label>
              <input type="text" id="commune" name="commune" value={formData.address.commune} onChange={(e) => handleNestedChange('address', e)} className={`${inputStyle} bg-gray-100 cursor-not-allowed`} readOnly />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address_details" className="block text-gray-700 font-medium mb-2">Full Address Details</label>
              <input type="text" id="address_details" name="address_details" value={formData.address.address_details} onChange={(e) => handleNestedChange('address', e)} className={`${inputStyle} bg-gray-100 cursor-not-allowed`} readOnly />
            </div>
          </div>
        </fieldset>
        
        {/* Category */}
        <fieldset className="border border-gray-300 rounded-lg p-6 bg-gray-50/50">
          <legend className="text-xl font-semibold text-blue-600 px-2">Category</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div>
              <label htmlFor="type" className="block text-gray-700 font-medium mb-2">Type</label>
              <select id="type" name="type" value={formData.category.type} onChange={(e) => handleNestedChange('category', e)} className={inputStyle}>
                <option>Apartment</option><option>House</option><option>Condo</option><option>Room</option>
              </select>
            </div>
            <div>
              <label htmlFor="give_in" className="block text-gray-700 font-medium mb-2">Available From</label>
              <input type="date" id="give_in" name="give_in" value={formData.category.give_in} onChange={(e) => handleNestedChange('category', e)} className={inputStyle} />
            </div>
            <div>
              <label htmlFor="width" className="block text-gray-700 font-medium mb-2">Width (e.g., 50m²)</label>
              <input type="text" id="width" name="width" value={formData.category.width} onChange={(e) => handleNestedChange('category', e)} className={inputStyle} />
            </div>
            <div>
              <label htmlFor="floor" className="block text-gray-700 font-medium mb-2">Floor (e.g., 2nd)</label>
              <input type="text" id="floor" name="floor" value={formData.category.floor} onChange={(e) => handleNestedChange('category', e)} className={inputStyle} />
            </div>
          </div>
        </fieldset>

        {/* Amenities */}
        <fieldset className="border border-gray-300 rounded-lg p-6 bg-gray-50/50">
          <legend className="text-xl font-semibold text-blue-600 px-2">Amenities</legend>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
            <div><label htmlFor="wifi" className="block text-gray-700 font-medium mb-2">Wi-Fi</label><select id="wifi" name="wifi" value={formData.amenities.wifi} onChange={(e) => handleNestedChange('amenities', e)} className={inputStyle}><option value="available">Available</option><option value="unavailable">Unavailable</option></select></div>
            <div><label htmlFor="parking" className="block text-gray-700 font-medium mb-2">Parking</label><select id="parking" name="parking" value={formData.amenities.parking} onChange={(e) => handleNestedChange('amenities', e)} className={inputStyle}><option value="yes">Yes</option><option value="no">No</option></select></div>
            <div><label htmlFor="swimming_pool" className="block text-gray-700 font-medium mb-2">Pool</label><select id="swimming_pool" name="swimming_pool" value={formData.amenities.swimming_pool} onChange={(e) => handleNestedChange('amenities', e)} className={inputStyle}><option value="yes">Yes</option><option value="no">No</option></select></div>
            <div><label htmlFor="electric" className="block text-gray-700 font-medium mb-2">Electricity</label><select id="electric" name="electric" value={formData.amenities.electric} onChange={(e) => handleNestedChange('amenities', e)} className={inputStyle}><option value="included">Included</option><option value="excluded">Excluded</option></select></div>
            <div><label htmlFor="water" className="block text-gray-700 font-medium mb-2">Water</label><select id="water" name="water" value={formData.amenities.water} onChange={(e) => handleNestedChange('amenities', e)} className={inputStyle}><option value="included">Included</option><option value="excluded">Excluded</option></select></div>
          </div>
        </fieldset>

        {/* Image Upload */}
        <fieldset className="border border-gray-300 rounded-lg p-6 bg-gray-50/50">
          <legend className="text-xl font-semibold text-blue-600 px-2">Images</legend>
          <div className="mt-4">
            <label htmlFor="images" className="block text-gray-700 font-medium mb-2">Upload Images</label>
            <input type="file" id="images" name="images" onChange={handleFileChange} multiple className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
            {formData.images.length > 0 && (
              <div className="mt-4">
                <p className="font-medium text-gray-700">{formData.images.length} file(s) selected:</p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                  {formData.images.map((file, index) => (<li key={index}>{file.name}</li>))}
                </ul>
              </div>
            )}
          </div>
        </fieldset>

        <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default Post;