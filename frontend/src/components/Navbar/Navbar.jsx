import React, { useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "Home", link: "#" },
  { label: "Services", hasDropdown: true },
  { label: "Partners", hasDropdown: true },
  { label: "E-commerce", hasDropdown: true },
  { label: "Contact Us", link: "#" },
  { label: "Business Enquiry", link: "#" },
  { label: "Career", link: "#" },
  { label: "Event", link: "#" },
  { label: "Policies", hasDropdown: true },
  { label: "About", hasDropdown: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {/* Overlay Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <span>Menu</span>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            ✖
          </button>
        </div>

        <ul className="menu-list">
          {navItems.map((item, idx) => (
            <li key={idx} className="menu-item">
              <a href={item.link || "#"}>{item.label}</a>
              {item.hasDropdown && <span className="arrow">▶</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Dimmed background when menu is open */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
