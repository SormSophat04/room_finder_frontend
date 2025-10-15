import React, { useState } from "react";
import House from "../../assets/house.png";

// --- SVG Icon Components ---
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const EyeIcon = ({ off = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-500"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
    {off && <line x1="1" y1="1" x2="23" y2="23"></line>}
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



function UserLoginRegister() {
  const [isLoginView, setIsLoginView] = useState(true);

  // --- Form State ---
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState(""); // Default to none
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginView) {
      console.log("Login attempt:", { tel, password });
    } else {
      if (password !== confirmPassword) {
        console.error("Passwords do not match!");
        return;
      }
      console.log("Sign Up attempt:", {
        firstName,
        lastName,
        tel,
        password,
        gender,
      });
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    // Clear all fields on view toggle
    setTel("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setConfirmPassword("");
  setGender("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const renderFormFields = () => {
    if (isLoginView) {
      // --- Login View ---
      return (
        <>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <PhoneIcon />
            </span>
            <input
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockIcon />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4"
            >
              <EyeIcon off={showPassword} />
            </button>
          </div>
        </>
      );
    } else {
      // --- Sign Up View ---
      return (
        <>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <PhoneIcon />
            </span>
            <input
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockIcon />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4"
            >
              <EyeIcon off={showPassword} />
            </button>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockIcon />
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Confirm Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4"
            >
              <EyeIcon off={showConfirmPassword} />
            </button>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-around">
            <span className="text-gray-600">Gender</span>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border-2 ${
                  gender === "male"
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-400"
                }`}
              ></span>
              <span className="ml-2">Male</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border-2 ${
                  gender === "female"
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-400"
                }`}
              ></span>
              <span className="ml-2">Female</span>
            </label>
          </div>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center justify-start pt-6 px-4">
      <div className="w-full max-w-sm mx-auto text-center">
        {/* Logo Section */}
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto flex items-center justify-center mb-2 overflow-hidden">
            <img
              src={House}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-wider">
            Room Rental Finder Cambodian
          </h1>
          <p className="text-sm text-gray-600">
            The Best Place to Find Your Dream Room
          </p>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold mb-2">
          {isLoginView ? "Login" : "Signup"}
        </h2>
        <p className="text-gray-500 mb-6">Business Account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {renderFormFields()}

          {/* Buttons */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              className="w-full py-3 bg-blue-800 text-white rounded-lg font-semibold text-lg hover:bg-blue-900 transition-colors"
            >
              {isLoginView ? "Login" : "Confirm"}
            </button>
            <button
              type="button"
              onClick={toggleView}
              className="w-full py-3 mb-4 bg-white text-gray-800 border-2 border-gray-800 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {isLoginView ? "Sign up" : "Log in"}
            </button>
          </div>
        </form>

        {isLoginView && (
          <a
            href="#"
            className="inline-block text-gray-600 hover:text-gray-800"
          >
            Forgot Password?
          </a>
        )}
        <div className="h-30">

        </div>

        {/* {isLoginView && (
          <>
            <div className="my-4 flex items-center">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-4 text-gray-500">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
              <TelegramIcon />
              <span>Log in with Telegram</span>
            </button>
          </>
        )} */}
      </div>
    </div>
  );
}

export default UserLoginRegister;
