import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      <Navbar></Navbar>
      <div className="my-container">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
