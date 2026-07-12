import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

const playfair = "'Playfair Display', serif";
const poppins = "'Poppins', sans-serif";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <nav style={{ background: '#111827', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 20px rgba(236,72,153,0.1)' }}>
        <a href="/" style={{ color: '#ec4899', fontSize: '26px', fontWeight: 'bold', textDecoration: 'none', fontFamily: playfair, fontStyle: 'italic', letterSpacing: '1px' }}>
          ShopNow.pk 🛍️
        </a>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontFamily: poppins }}>
          <a href="/products" style={{ color: 'white', padding: '8px 20px', fontWeight: '500', textDecoration: 'none', letterSpacing: '1px', fontSize: '14px' }}>Products</a>
          <a href="/login" style={{ background: '#ec4899', color: 'white', padding: '8px 20px', borderRadius: '999px', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>Login</a>
          <a href="/signup" style={{ background: '#374151', color: 'white', padding: '8px 20px', borderRadius: '999px', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>Sign Up</a>
          <a href="/checkout" style={{ background: '#ec4899', color: 'white', padding: '8px 20px', borderRadius: '999px', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>
            🛒 {cart.length}
          </a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;