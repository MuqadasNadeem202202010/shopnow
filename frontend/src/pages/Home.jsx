import React from 'react';
import { Link } from 'react-router-dom';

const playfair = "'Playfair Display', serif";
const poppins = "'Poppins', sans-serif";

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '100px 16px 80px', background: 'linear-gradient(180deg, #111827 0%, #030712 100%)' }}>
        <p style={{ fontFamily: poppins, color: '#ec4899', fontSize: '14px', letterSpacing: '4px', fontWeight: '500', marginBottom: '16px', textTransform: 'uppercase' }}>
          Premium Pakistani Fashion
        </p>
        <h2 style={{ fontFamily: playfair, fontSize: '64px', fontWeight: '900', marginBottom: '16px', lineHeight: '1.2' }}>
          Wear Your <span style={{ color: '#ec4899', fontStyle: 'italic' }}>Confidence</span>
        </h2>
        <p style={{ fontFamily: poppins, color: '#9ca3af', fontSize: '18px', marginBottom: '40px', fontWeight: '300', letterSpacing: '2px' }}>
          Discover the finest Pakistani clothing for every occasion
        </p>
        <Link to="/products" style={{ background: '#ec4899', color: 'white', padding: '14px 40px', borderRadius: '999px', fontWeight: '600', textDecoration: 'none', fontSize: '16px', fontFamily: poppins, letterSpacing: '1px' }}>
          Shop Now ✨
        </Link>
      </div>

      {/* Features Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', padding: '60px 48px', background: '#0f172a' }}>
        {[
          { icon: '👗', title: 'Premium Quality', desc: 'Finest fabrics from top Pakistani designers' },
          { icon: '🚚', title: 'Fast Delivery', desc: 'Delivered to your doorstep across Pakistan' },
          { icon: '💎', title: 'Exclusive Designs', desc: 'Unique styles you won\'t find anywhere else' }
        ].map((item, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '32px', background: '#111827', borderRadius: '16px', border: '1px solid #1f2937' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
            <h3 style={{ fontFamily: playfair, fontSize: '22px', fontWeight: '700', marginBottom: '8px', color: '#ec4899' }}>{item.title}</h3>
            <p style={{ fontFamily: poppins, color: '#9ca3af', fontSize: '14px', lineHeight: '1.6' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center', padding: '80px 16px', background: '#030712' }}>
        <h2 style={{ fontFamily: playfair, fontSize: '42px', fontWeight: '900', marginBottom: '16px' }}>
          Ready to <span style={{ color: '#ec4899', fontStyle: 'italic' }}>Shop?</span>
        </h2>
        <p style={{ fontFamily: poppins, color: '#9ca3af', marginBottom: '32px', fontSize: '16px' }}>
          Browse our exclusive collection of Pakistani fashion
        </p>
        <Link to="/products" style={{ background: 'transparent', color: '#ec4899', padding: '14px 40px', borderRadius: '999px', fontWeight: '600', textDecoration: 'none', fontSize: '16px', fontFamily: poppins, border: '2px solid #ec4899' }}>
          View Collection →
        </Link>
      </div>
    </div>
  );
}

export default Home;