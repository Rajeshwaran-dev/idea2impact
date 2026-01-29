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
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <div className="logo">Idea2Impact</div>
        <button className="nav-cta" onClick={onOpenModal}>
          Register Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
