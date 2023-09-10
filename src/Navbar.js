import React from "react";

function Navbar() {
    const navbarStyle = {
        backgroundColor: "#333", // Background color
        color: "#fff", // Text color
        padding: "10px 0", // Padding at the top and bottom
    };

    const ulStyle = {
        listStyleType: "none", // Remove bullet points
        padding: 0,
        display: "flex",
        justifyContent: "space-around", // Space items evenly
    };

    const liStyle = {
        margin: "0 10px", // Add spacing between list items
    };

    const linkStyle = {
        textDecoration: "none", // Remove underline
        color: "#fff", // Text color
    };

    return (
        <nav style={navbarStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}><a style={linkStyle} href="/">Home</a></li>
                <li style={liStyle}><a style={linkStyle} href="/Activity">Activity</a></li>
                <li style={liStyle}><a style={linkStyle} href="/Plan">Plan</a></li>
                <li style={liStyle}><a style={linkStyle} href="/Timer">Timer</a></li>
                <li style={liStyle}><a style={linkStyle} href="/Login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
