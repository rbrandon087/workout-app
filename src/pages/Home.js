import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zwcwryojtrkygrslhndl.supabase.co",
  "your_api_key_here"
);

const Home = () => {
  const containerStyle = {
    backgroundColor: "#4f5f76",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const imageStyle = {
    maxWidth: "50%",
    margin: "10px",
    backgroundColor: "#0f2862",
    transition: "transform 0.3s",
  };

  const headingStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "#393f4d",
  };

  const paragraphStyle = {
    maxWidth: "70%",
    fontSize: "16px",
    lineHeight: "1.5",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  const scaledImageStyle = {
    ...imageStyle,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Workout App</h1>
      <img
        src={process.env.PUBLIC_URL + '/runner.jpg'}
        alt="My Image"
        style={scaledImageStyle}
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
      <p style={paragraphStyle}>
        Welcome to Workout Plan - Where Fitness Meets Fun! Discover your true potential, achieve your fitness goals, and transform your life with our diverse range of engaging workouts, expert guidance, and a supportive community. Join us today and embark on a journey to a healthier, happier you!
      </p>
      <p>work done by brandon chris allen jarret and elvin</p>
    </div>
  );
};

export default Home;
