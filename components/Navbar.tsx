import React, { useState, useEffect } from "react";

/* =======================
   Props Type
======================= */
interface NavbarProps {
  onOpenModal: () => void;
}

/* =======================
   Component
======================= */
const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div>
          <img style={{ width: 90}} src="./logo.png" alt="logo" />
        </div>
        <button className="nav-cta" onClick={onOpenModal}>
          Register Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
