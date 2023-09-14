import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zwcwryojtrkygrslhndl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Y3dyeW9qdHJreWdyc2xobmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyOTE1MzIsImV4cCI6MjAwOTg2NzUzMn0.6rfOo0VhEbNh6MN5gjEtmHOFo1jEg0C3-D_o34JfZjU"
);

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function check_login_in_db() {
    try {
      // Log user input values before making the database query
      console.log("User input values:", formData.email, formData.password);

      const { data, error } = await supabase
        .from("Users")
        .select()
        .eq("email", formData.email.toString())
        .eq("password", formData.password.toString())
        .single();

      if (error) {
        console.error("Error checking user in database:", error.message);
      } else {
        if (data) {
          // User with the provided email and password exists in the database
          console.log("Login successful");
          // You can perform actions for a successful login here.
        } else {
          // User with the provided email and password does not exist in the database
          console.log("Login failed, please try logging in again");
          // You can handle the case of unsuccessful login here.
        }
      }
    } catch (error) {
      console.error("Error checking user in database:", error.message);
    }
  }

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: formData.email.toString(),
        password: formData.password.toString(),
      });

      if (error) {
        console.error("Authentication error:", error.message);
        alert("Login failed. Please try again.");
      } else {
        console.log("Login successful:", user);
        // You can redirect the user or perform other actions upon successful login.
        navigate("/");
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#f2f2f2",
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "350px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h1>
        <form>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#0B1B3D",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
