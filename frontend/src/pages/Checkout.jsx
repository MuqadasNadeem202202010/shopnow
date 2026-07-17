import React, { useState } from 'react';
import axios from 'axios';

function Checkout({ cart, setCart }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const totalPrice = cart ? cart.reduce((sum, item) => sum + item.price, 0) : 0;

  const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://shopnow-6wvw.vercel.app/api/order/place', {
        name, phone, city, address, cart, total: totalPrice
      });
      setSuccess(true);
      setCart([]);
    } catch (error) {
      alert('Something went wrong! Try again.');
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', background: '#111827', padding: '48px', borderRadius: '16px' }}>
          <h2 style={{ color: '#4ade80', fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>Order Placed! 🎉</h2>
          <p style={{ color: '#9ca3af', fontSize: '18px' }}>Thank you {name}! Your order is confirmed.</p>
          <p style={{ color: '#9ca3af', marginTop: '8px' }}>We will contact you on {phone} soon!</p>
          <a href="/" style={{ display: 'inline-block', marginTop: '24px', background: '#ec4899', color: 'white', padding: '12px 32px', borderRadius: '999px', fontWeight: 'bold', textDecoration: 'none' }}>
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', padding: '32px' }}>
      <h2 style={{ color: '#ec4899', fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px' }}>Checkout 🛍️</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: '#111827', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ color: '#ec4899', fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Order Summary</h3>
          {cart && cart.length === 0 ? (
            <p style={{ color: '#9ca3af' }}>No items in cart!</p>
          ) : (
            <>
              {cart && cart.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
                  <img src={item.image} alt={item.name} style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: '8px' }} />
                  <div>
                    <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.name}</p>
                    <p style={{ color: '#ec4899', fontSize: '14px' }}>Size: {item.size}</p>
                    <p style={{ color: '#ec4899', fontWeight: 'bold' }}>Rs. {item.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #374151', marginTop: '16px', paddingTop: '16px' }}>
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Total: <span style={{ color: '#ec4899' }}>Rs. {totalPrice.toLocaleString()}</span></p>
              </div>
            </>
          )}
        </div>
        <div style={{ background: '#111827', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ color: '#ec4899', fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Delivery Details</h3>
          <form onSubmit={handleOrder}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #374151', background: '#1f2937', color: 'white', fontSize: '16px' }} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>Phone Number</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="03XX-XXXXXXX" required
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #374151', background: '#1f2937', color: 'white', fontSize: '16px' }} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>City</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city" required
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #374151', background: '#1f2937', color: 'white', fontSize: '16px' }} />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>Address</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your full address" required rows={3}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #374151', background: '#1f2937', color: 'white', fontSize: '16px', resize: 'none' }} />
            </div>
            <button type="submit" disabled={loading}
              style={{ width: '100%', background: '#ec4899', color: 'white', padding: '14px', borderRadius: '999px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '18px' }}>
              {loading ? 'Placing Order...' : 'Place Order 🚀'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;