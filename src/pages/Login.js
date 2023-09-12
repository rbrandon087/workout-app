import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    // Implement your login logic here, including validation and error handling
    if (formData.email && formData.password) {
      // Perform authentication logic here (e.g., API call)
      try {
        // Successful authentication
        alert('Login successful!');
        navigate('/');
      } catch (error) {
        // Handle authentication error (display error message to the user)
        console.error('Authentication error:', error);
        alert('Login failed. Please try again.');
      }
    } else {
      // Handle form validation error
      alert('Please enter both email and password.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#f2f2f2', padding: '30px', border: '1px solid #ccc', borderRadius: '5px', width: '350px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h1>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#0B1B3D',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
