// import React, { useCallback, useState } from "react";
// import {
//   GoogleMap,
//   useJsApiLoader,
//   Marker,
//   Autocomplete,
// } from "@react-google-maps/api";

// function Location() {
//   // --- Google Map Configuration ---
//   const mapContainerStyle = {
//     width: "100%",
//     height: "250px",
//     borderRadius: "0.5rem",
//   };
//   const initialCenter = {
//     lat: 11.5564,
//     lng: 104.9282,
//   };
//   const libraries = ["places"];

//   // --- UNCHANGED: Google Maps state and setup ---
//   const [mapCenter, setMapCenter] = useState(initialCenter);
//   const [markerPosition, setMarkerPosition] = useState(initialCenter);
//   const [autocomplete, setAutocomplete] = useState(null);

//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDea98HFLRmTxoKdv6mnleJA54V2Az6Iwo", // <-- PASTE YOUR API KEY HERE
//     libraries,
//   });
//   const fetchAddress = useCallback((lat, lng) => {
//     const geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode({ location: { lat, lng } }, (results, status) => {
//       if (status === "OK" && results[0]) {
//         const address = results[0];
//         setFormData((prevState) => ({
//           ...prevState,
//           address: {
//             ...prevState.address,
//             address_details: address.formatted_address || "",
//           },
//         }));
//       } else {
//         console.error("Geocoder failed due to: " + status);
//       }
//     });
//   }, []);
//   const handleNestedChange = (parent, e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [parent]: { ...prevState[parent], [name]: value },
//     }));
//   };

//   const onAutocompleteLoad = useCallback((autocompleteInstance) => {
//     setAutocomplete(autocompleteInstance);
//   }, []);

//   const onPlaceChanged = useCallback(() => {
//     if (autocomplete !== null) {
//       const place = autocomplete.getPlace();
//       if (place.geometry) {
//         const lat = place.geometry.location.lat();
//         const lng = place.geometry.location.lng();
//         setMapCenter({ lat, lng });
//         setMarkerPosition({ lat, lng });
//         fetchAddress(lat, lng);
//       }
//     } else {
//       console.log("Autocomplete is not loaded yet!");
//     }
//   }, [autocomplete, fetchAddress]);

//   const handleMapClick = useCallback(
//     (event) => {
//       const lat = event.latLng.lat();
//       const lng = event.latLng.lng();
//       setMarkerPosition({ lat, lng });
//       fetchAddress(lat, lng);
//     },
//     [fetchAddress]
//   );

//   const handleMarkerDragEnd = useCallback(
//     (event) => {
//       const lat = event.latLng.lat();
//       const lng = event.latLng.lng();
//       setMarkerPosition({ lat, lng });
//       fetchAddress(lat, lng);
//     },
//     [fetchAddress]
//   );

//   return (
//     <div>
//       <h2 className="text-lg font-semibold text-gray-800">Locations</h2>
//       <div>
//         <label
//           htmlFor="location"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Choose city <span className="text-red-500">*</span>
//         </label>
//         <select id="location" name="location" className={inputStyle}>
//           <option></option>
//           <option>Siem Reap</option>
//           <option>Sihanoukville</option>
//         </select>
//       </div>
//       <div>
//         <label
//           htmlFor="location"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Choose district <span className="text-red-500">*</span>
//         </label>
//         <select id="location" name="location" className={inputStyle}>
//           <option></option>
//           <option>Siem Reap</option>
//           <option>Sihanoukville</option>
//         </select>
//       </div>
//       <div>
//         <label
//           htmlFor="location"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Choose commune <span className="text-red-500">*</span>
//         </label>
//         <select id="location" name="location" className={inputStyle}>
//           <option></option>
//           <option>Siem Reap</option>
//           <option>Sihanoukville</option>
//         </select>
//       </div>
//       <div>
//         <label
//           htmlFor="address_details"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Address <span className="text-red-500">*</span>
//         </label>
//         <textarea
//           id="address_details"
//           name="address_details"
//           value={formData.address.address_details}
//           onChange={(e) => handleNestedChange("address", e)}
//           rows="2"
//           className={inputStyle}
//           placeholder="Enter full address or set on map"
//         ></textarea>
//       </div>
//       <div>
//         {isLoaded ? (
//           <>
//             <Autocomplete
//               onLoad={onAutocompleteLoad}
//               onPlaceChanged={onPlaceChanged}
//             >
//               <input
//                 type="text"
//                 placeholder="Set Location on Google Maps"
//                 className={`${inputStyle} mb-2`}
//               />
//             </Autocomplete>
//             <GoogleMap
//               mapContainerStyle={mapContainerStyle}
//               center={mapCenter}
//               zoom={14}
//               onClick={handleMapClick}
//             >
//               <Marker
//                 position={markerPosition}
//                 draggable={true}
//                 onDragEnd={handleMarkerDragEnd}
//               />
//             </GoogleMap>
//           </>
//         ) : (
//           <div className="w-full h-[250px] flex items-center justify-center bg-gray-200 rounded-lg">
//             <p>Loading Map...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Location;
