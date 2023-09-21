import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Plan from "./pages/Plan";
import Timer from "./pages/Timer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  // Simulate authentication status (you can replace this with your real authentication logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userID, setUserID] = useState(null); // Initialize userID as null

  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Navbar is placed here, so it's visible on all pages */}
        <Routes>
          {!isAuthenticated && (
            <Route
              path="/"
              element={
                <Login
                  onLogin={userUuid => {
                    setIsAuthenticated(true);
                    setUserID(userUuid); // Set userID on successful login
                  }}
                />
              }
            />
          )}
          {isAuthenticated && (
            <Route
              path="/home"
              element={<Navigate to={`/home/${userID}`} />} // Use userID in Navigate
            />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home userID={userID} />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/plan" element={<Plan userID={userID} />} />{" "}
          {/* Pass userID as a prop to Plan */}
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
