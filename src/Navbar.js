import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const navbarStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 0",
  };

  const ulStyle = {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
  };

  const liStyle = {
    margin: "0 10px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: isHovered ? "#fff" : "#ccc", // Change text color on hover
    transition: "color 0.3s", // Add a smooth transition effect for text color
  };

  const handleItemHover = () => {
    setIsHovered(true);
  };

  const handleItemLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle} onMouseEnter={handleItemHover} onMouseLeave={handleItemLeave}>
          {/* Use Link instead of anchor for internal navigation */}
          <Link to="/Home" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle} onMouseEnter={handleItemHover} onMouseLeave={handleItemLeave}>
          <Link to="/Activity" style={linkStyle}>
            Activity
          </Link>
        </li>
        <li style={liStyle} onMouseEnter={handleItemHover} onMouseLeave={handleItemLeave}>
          <Link to="/Plan" style={linkStyle}>
            Plan
          </Link>
        </li>
        <li style={liStyle} onMouseEnter={handleItemHover} onMouseLeave={handleItemLeave}>
          <Link to="/Timer" style={linkStyle}>
            Timer
          </Link>
        </li>
        <li style={liStyle} onMouseEnter={handleItemHover} onMouseLeave={handleItemLeave}>
          <Link to="/Login" style={linkStyle}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
