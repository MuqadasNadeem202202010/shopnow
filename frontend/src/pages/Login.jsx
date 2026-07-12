import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('https://shopnow-backend.netlify.app/api/auth/login', {
        email, password
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setSuccess(`Welcome back ${res.data.user.name}! Redirecting...`);
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#111827', padding: '40px', borderRadius: '16px', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ color: '#ec4899', fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>
          Welcome Back 👋
        </h2>
        {error && (
          <p style={{ color: '#f87171', textAlign: 'center', marginBottom: '16px', background: '#450a0a', padding: '10px', borderRadius: '8px' }}>{error}</p>
        )}
        {success && (
          <p style={{ color: '#4ade80', textAlign: 'center', marginBottom: '16px', background: '#052e16', padding: '10px', borderRadius: '8px' }}>{success}</p>
        )}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #374151', background: '#1f2937', color: 'white', fontSize: '16px' }}
            />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #374151', background: '#1f2937', color: 'white', fontSize: '16px' }}
            />
          </div>
          <button
            type="submit"
            className="btn-pink"
            style={{ width: '100%', padding: '12px', fontSize: '16px' }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p style={{ textAlign: 'center', marginTop: '16px', color: '#9ca3af' }}>
            Don't have an account? <Link to="/signup" style={{ color: '#ec4899' }}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;