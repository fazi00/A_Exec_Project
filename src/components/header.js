"use client";
import { useState } from "react";

const Header = () => {
  return (
    <header
      className="w-full bg-cover bg-center h-60 flex items-center px-8"
      style={{ backgroundImage: "url('/header_img.jpg')" }}
    >
      <div>
        <h2 className="text-white font-bold text-xl py-3">BRIDLE</h2>
        <h1 className="text-white text-3xl font-bold">
          Supercharge your equine business <br /> all in one place with Bridle
        </h1>
        <p className="text-white text-md py-3">
          Manage horses & clients, streamline finances, automate bookings &
          events, and more.
        </p>
      </div>

      {/*  */}
    </header>
  );
};

export default Header;
