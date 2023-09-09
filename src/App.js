import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Activity from './pages/Activity'
import Plan from './pages/Plan'
import Timer from './pages/Timer'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/plan' element={<Plan />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
