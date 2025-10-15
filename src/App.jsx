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
import RoomManage from "./pages/admin/RoomManage";

function App() {
  const products = useMemo(
    () => [
      {
        id: 1,
        title: "Numbuzin No.9+ NAD+ Bio Lifting-Sil Essence",
        type: "Essence",
        location: "Online Store", // Or a relevant physical location
        price: 35, // Example price
        imageUrl: "https://imgs.search.brave.com/7kvYqx6t_r2QlV5o8BgdltedX7vsmsnDRyNuSuFvFDE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNy9j/dXRlc3QtZnVubnkt/Y2F0LXBpY3R1cmVz/LTY4NzYxN2U0ZjMy/NWRfXzcwMC5qcGc", // Main image for home page
        images: [
          "https://imgs.search.brave.com/XEp6p4OwoRAySBzTPLPGiem0V-p3gXU7JUC9XDIbBww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/dWF2SHZwTXdXU0VB/QUFBTS9jYXQtY2F0/LW1lbWUuZ2lm.gif",
          "https://imgs.search.brave.com/RRU3Td_JdlanRtfiRqROjsqKpIZXshENzczRCeRS9sc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bGV0LW1lLWRyYXct/eW91ci1jYXQtaW4t/ZnVubnktc3R5bGUt/djAtb2VuZXo1Yjdi/Z3BmMS5qcGVnP3dp/ZHRoPTMwMjQmYXV0/bz13ZWJwJnM9ODJi/YzQ4ZTRiNzJlODc5/MDJkZDFkNGQxMWIz/NGExZDQ2ZDU3Mjg2/Mw",
          "https://imgs.search.brave.com/xHChp2rGYjliKKBJBnqn9S7moxGZDKBkJWv0tN60Kho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdC1pcy10aGUt/ZnVubmllc3QtZ29v/Zmllc3QtcGljdHVy/ZS1vZi15b3VyLWNh/dC1zLXYwLXR6a3A1/eTZ2MzFhZjEuanBl/Zz93aWR0aD04Mjgm/YXV0bz13ZWJwJnM9/NjUyZGE4NDcwMGFk/ZWVhYjY2YjAwYWUx/OWE3MDZlYmM2NmUw/MTcwYg",
          // Add more images here if you have them
        ],
      },
      {
        id: 2,
        title: "Another Great Product",
        type: "Skincare",
        location: "Beauty Shop",
        price: 50,
        imageUrl: "https://imgs.search.brave.com/0gnb-KHa1R4SilMtB9ogUoy_8rBIT9BYILP1i7Fzj64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRiLzcy/L2JiLzRiNzJiYjdl/OTEwZmQzNGM0MDJm/ODUyZGNjYzVmYTY1/LmpwZw",
        images: [
          "https://imgs.search.brave.com/F2gnJyydWuErVAFMQlfwc4PUPk-mLBZXdYkfHzyE74o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8xMC82/OGRmNzI2NjkxMDZl/X2Z1bm55LWN1dGUt/Y2F0cy1waWN0dXJl/cy03X183MDAuanBn",
          "https://imgs.search.brave.com/-rlXea0pXECQ2eI7m-JNOCtDB8fw0eOkDqqCc5baSuA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdC1pcy10aGUt/ZnVubmllc3QtZ29v/Zmllc3QtcGljdHVy/ZS1vZi15b3VyLWNh/dC1zLXYwLWtvYTFs/dnBpa3k5ZjEuanBl/Zz93aWR0aD0xNzQw/JmF1dG89d2VicCZz/PTE4YzkxNjNiNGM5/ZDIzZWE0NGU4ZTE2/MWY3YzYzYzllMmI4/N2I1N2Y",
        ],
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
        <Route path="/admin" element={<AdminLog />} />

        <Route path="/admin/manage" element={<AdminManage />}>
          <Route path="/admin/manage" element={<Dashboard />} />
          <Route path="/admin/manage/users" element={<UserManage />} />
          <Route path="/admin/manage/rooms" element={<RoomManage />} />
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
