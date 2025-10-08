import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

function AdminManage() {
  return (
    <div className="flex h-screen w-full bg-[#0D0D0D] text-white font-sans">
      <Sidebar />
      <Outlet/>
    </div>
  );
}

export default AdminManage;
