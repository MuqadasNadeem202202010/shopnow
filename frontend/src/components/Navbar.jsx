import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ color: '#ec4899', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>
        ShopNow.pk 🛍️
      </Link>
      <div className="nav-links">
        <Link to="/login" className="btn-pink">Login</Link>
        <Link to="/signup" className="btn-gray">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;