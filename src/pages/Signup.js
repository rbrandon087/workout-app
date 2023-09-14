import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setSignUpError("Email and Password fields cannot be empty.");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    // Your signup logic here (Supabase or other authentication logic)

    // If successful:
    // window.alert("Signup successful. Check your email for the verification link.");
  };

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
      
      console.log(email)
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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

