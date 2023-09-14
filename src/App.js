import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Activity from './pages/Activity';
import Plan from './pages/Plan';
import Timer from './pages/Timer';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  // Simulate authentication status (you can replace this with your real authentication logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Navbar is placed here, so it's visible on all pages */}
        <Routes>
          {/* Show the Login component when not authenticated */}
          {!isAuthenticated && <Route path="/" element={<Login onLogin={() => setIsAuthenticated(true)} />} />}

          {/* Redirect to /home if authenticated */}
          {isAuthenticated && <Route path="/home" element={<Navigate to="/home" />} />}

          {/* Other routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
