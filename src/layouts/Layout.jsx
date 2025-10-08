import React from "react";
import Header from "./Header";
import MobileNavBar from "../components/Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <MobileNavBar />
      <Footer />
    </div>
  );
}

export default Layout;
