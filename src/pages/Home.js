import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";
import { createClient } from "@supabase/supabase-js";
import "./home.css"

const supabase = createClient(
  "https://zwcwryojtrkygrslhndl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Y3dyeW9qdHJreWdyc2xobmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyOTE1MzIsImV4cCI6MjAwOTg2NzUzMn0.6rfOo0VhEbNh6MN5gjEtmHOFo1jEg0C3-D_o34JfZjU"
);

const Home = () => {
  return (
    <div className="image container">
      <h1>Workout App</h1>
      <p>Get Your Workout on!</p>
      <img src={process.env.PUBLIC_URL + '/runner.jpg'} alt="My Image" />
    
    </div>
  );
};

export default Home;
