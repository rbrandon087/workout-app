import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
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
    color: "#fff",
  };

  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          {/* Use Link instead of anchor for internal navigation */}
          <Link to="/Home" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/Activity" style={linkStyle}>
            Activity
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/Plan" style={linkStyle}>
            Plan
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/Timer" style={linkStyle}>
            Timer
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/Login" style={linkStyle}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
