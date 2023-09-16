import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zwcwryojtrkygrslhndl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Y3dyeW9qdHJreWdyc2xobmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyOTE1MzIsImV4cCI6MjAwOTg2NzUzMn0.6rfOo0VhEbNh6MN5gjEtmHOFo1jEg0C3-D_o34JfZjU"
);

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const handleSignUp = async e => {
    e.preventDefault();

    if (email === "" || password === "") {
      setSignUpError("Email and Password fields cannot be empty.");
      return;
    }

    try {
      await add_signup_to_db();
      window.alert(
        "Signup successful. Check your email for the verification link."
      );
      // You can also redirect the user to another page if needed.
    } catch (error) {
      console.error("Error during signup:", error.message);
      // Handle any signup-related errors here.
    }
  };

  async function add_signup_to_db() {
    try {
      const { data, error } = await supabase
        .from("Users")
        .insert([
          {
            email: email,
            password: password,
          },
        ])
        .single();

      if (error) {
        console.error("Error adding user to database:", error.message);
      } else {
        console.log("User added to database:", data);
        // You can perform additional actions here after adding the user
        // For example, show a success message or redirect to another page.
      }
    } catch (error) {
      console.error("Error adding user to database:", error.message);
    }
  }

  const loginContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const loginFormStyle = {
    backgroundColor: "#f2f2f2",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "350px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#0B1B3D",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div>
      <div style={loginContainerStyle}>
        <div style={loginFormStyle}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="emailInput"></label>
              <input
                type="email"
                placeholder="Enter an Email"
                id="emailInput"
                value={email}
                style={inputStyle}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="passwordInput"></label>
              <input
                type="password"
                placeholder="Create a Password"
                id="passwordInput"
                value={password}
                style={inputStyle}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button style={buttonStyle} type="submit">
              Sign Up
            </button>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Already a member? <Link to="/login">Login!</Link>
            </p>
            {signUpError && <div>{signUpError}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

