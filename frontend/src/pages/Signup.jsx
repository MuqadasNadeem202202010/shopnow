import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await axios.post('https://shopnow-backend.netlify.app/api/auth/signup', {
        name, email, password
      });

      await emailjs.send(
        'service_6oldbfh',
        'template_fdzlwuk',
        {
          name: name,
          email: email,
          time: new Date().toLocaleString()
        },
        'HuusNYfFPaZyxGIhI'
      );

      setSuccess('Account created successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#111827', padding: '40px', borderRadius: '16px', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ color: '#ec4899', fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>
          Create Account 🛍️
        </h2>
        {error && (
          <p style={{ color: '#f87171', textAlign: 'center', marginBottom: '16px', background: '#450a0a', padding: '10px', borderRadius: '8px' }}>{error}</p>
        )}
        {success && (
          <p style={{ color: '#4ade80', textAlign: 'center', marginBottom: '16px', background: '#052e16', padding: '10px', borderRadius: '8px' }}>{success}</p>
        )}
        <form onSubmit={handleSignup}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #374151', background: '#1f2937', color: 'white', fontSize: '16px' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #374151', background: '#1f2937', color: 'white', fontSize: '16px' }} />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #374151', background: '#1f2937', color: 'white', fontSize: '16px' }} />
          </div>
          <button type="submit" disabled={loading}
            style={{ width: '100%', background: '#ec4899', color: 'white', padding: '12px', borderRadius: '999px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
          <p style={{ textAlign: 'center', marginTop: '16px', color: '#9ca3af' }}>
            Already have an account? <Link to="/login" style={{ color: '#ec4899' }}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;