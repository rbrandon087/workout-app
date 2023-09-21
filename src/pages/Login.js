import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zwcwryojtrkygrslhndl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Y3dyeW9qdHJreWdyc2xobmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyOTE1MzIsImV4cCI6MjAwOTg2NzUzMn0.6rfOo0VhEbNh6MN5gjEtmHOFo1jEg0C3-D_o34JfZjU"
);

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { email, password } = state;
      if (!email || !password) {
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error("Login failed:", error.message);
        alert("Login failed! Please check your credentials and try again.");
        return;
      }

      alert("Login successful!");
      const userUuid = data.user.id;
      navigate(`/home`);
      // You can also store the user's UUID in localStorage or a global state if needed
      localStorage.setItem("userUuid", userUuid);
      // This would be for a logout button
      // localStorage.removeItem("userUuid");
      console.log(userUuid);
      // const user_id = data.username
      // res.redirect('/plan/:userid')
      // navigate("/");
    } catch (error) {
      console.error("Login error:", error);
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
              value={state.email}
              onChange={e => setState({ ...state, email: e.target.value })}
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
              value={state.password}
              onChange={e => setState({ ...state, password: e.target.value })}
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
