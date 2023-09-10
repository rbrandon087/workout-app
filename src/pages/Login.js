import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const Login = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can implement your login logic here.
    alert('Login successful!');
    navigate('/');
  };

  return (
    <>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ backgroundColor: '#f2f2f2', padding: '30px', border: '1px solid #ccc', borderRadius: '5px', width: '350px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h1>
          <form>
            <div style={{ marginBottom: '10px' }}>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
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
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={state.password}
                onChange={(e) => setState({ ...state, password: e.target.value })}
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
    </>
  );
};

export default Login;
