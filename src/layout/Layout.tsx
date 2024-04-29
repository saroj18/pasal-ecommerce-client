import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/bar/Navbar";
import OfferBar from "../components/bar/OfferBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <header className="shadow-sm">
        <OfferBar/>
        <Navbar />
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
