import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";
import Detail from "./pages/clients/Detail";
import UserLoginRegister from "./pages/auth/UserLoginRegister";
import UserProfile from "./pages/user/UserProfile";
import Favorite from "./pages/clients/Favorite";

// Admin pages
import AdminLog from "./pages/auth/AdminLog";
import Dashboard from "./pages/admin/Dashboard";
import Layout from "./layouts/Layout";
import AdminManage from "./pages/admin/AdminManage";
import UserManage from "./pages/admin/UserManage";
import Post from "./pages/clients/Post";

function App() {
  const products = useMemo(
    () => [
      {
        id: 1,
        type: "Apartments",
        title: "Modern Apartment",
        location: "Downtown",
        price: "$1,200/mo",
      },
      {
        id: 2,
        type: "Cottages",
        title: "Cozy Cottage",
        location: "Suburbs",
        price: "$900/mo",
      },
      {
        id: 3,
        type: "Villas",
        title: "Luxury Villa",
        location: "Riverside",
        price: "$2,500/mo",
      },
      {
        id: 4,
        type: "Dorms",
        title: "Student Dorm",
        location: "University District",
        price: "$600/mo",
      },
      {
        id: 5,
        type: "Houses",
        title: "Family House",
        location: "Green Valley",
        price: "$1,800/mo",
      },
      {
        id: 6,
        type: "Houses",
        title: "Beachfront Bungalow",
        location: "Sunny Shores",
        price: "$2,200/mo",
      },
      {
        id: 7,
        type: "Flats",
        title: "Studio Flat",
        location: "City Center",
        price: "$850/mo",
      },
      {
        id: 8,
        type: "Cottages",
        title: "Rustic Cabin",
        location: "Forest Hills",
        price: "$700/mo",
      },
    ],
    []
  );

  return (
    <>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/detail/:id" element={<Detail products={products} />} />
          <Route path="/favorites" element={<Favorite products={products} />} />
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<UserLoginRegister />} />
          <Route path="/profile/user" element={<UserProfile />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLog />} />

        <Route path="/admin/manage" element={<AdminManage />}>
          <Route path="/admin/manage" element={<Dashboard />} />
          <Route path="/admin/manage/users" element={<UserManage />} />
          <Route
            path="/admin/manage/products"
            element={<div className="p-4 text-white">Product Management</div>}
          />
          <Route
            path="/admin/manage/settings"
            element={<div className="p-4 text-white">Settings</div>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
