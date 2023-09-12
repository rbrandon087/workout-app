import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Activity from './pages/Activity';
import Plan from './pages/Plan';
import Timer from './pages/Timer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LoginModal from './components/LoginModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Initialize the modal as open

  // Close the modal when the component mounts (on page load)
 const closeModal = () => {
  setIsModalOpen(false);
 };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/timer' element={<Timer />} />
        </Routes>
      </Router>

      {/* Render the LoginModal conditionally based on isModalOpen */}
      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
