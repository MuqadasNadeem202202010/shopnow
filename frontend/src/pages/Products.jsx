import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: "Floral Lawn Suit", price: 7500, category: "Women", image: "https://res.cloudinary.com/ddvpggeli/image/upload/f_auto,q_auto/v1782472540/girls_hidden_face_dpz_for_Instagram_Facebook_Whatsapp_TikTok_mirror_selfie_bfqmsn.jpg" },
  { id: 2, name: "Dark Green Shalwar Kameez", price: 8500, category: "Women", image: "https://res.cloudinary.com/ddvpggeli/image/upload/f_auto,q_auto/v1782472540/Elegant_Dark_Green_Shalwar_Kameez_with_Dupatta_ef2zhx.jpg" },
  { id: 3, name: "Brown Formal Suit", price: 9500, category: "Women", image: "https://res.cloudinary.com/ddvpggeli/image/upload/f_auto,q_auto/v1782472541/simple_and_elegant_dressing_idea_j0weo0.jpg" },
  { id: 4, name: "Pink Farshi Shalwar", price: 6500, category: "Women", image: "https://res.cloudinary.com/ddvpggeli/image/upload/f_auto,q_auto/v1782472540/Soft_pink_farshi_shalwar_outfit_with_tiny_heart_details_and_dreamy_desi_vibes_The_loose_fit_and_minimal_aesthetic_make_this_look_perfect_for_Eid_mornings_festive_gatherings_casual_wedding_events_and_classy_Paki_uuo40c.jpg" },
  { id: 5, name: "Burgundy Evening Gown", price: 15000, category: "Women", image: "https://res.cloudinary.com/ddvpggeli/image/upload/f_auto,q_auto/v1782472539/Burgundy_Evening_Dresses_A_Line_Long_Prom_Gowns_-_Purple___US4_jcg6xj.jpg" },
  { id: 6, name: "Brown Cape Maxi Dress", price: 12000, category: "Women", image: "https://res.cloudinary.com/ddvpggeli/image/upload/f_auto,q_auto/v1782472539/download_ve0ynq.jpg" },
  { id: 7, name: "Black Bridal Sherwani", price: 85000, category: "Men", image: "https://res.cloudinary.com/ddvpggeli/image/upload/f_auto,q_auto/v1782472540/Elegant_Black_Pakistani_Sherwani_for_Grooms___Luxurious_Wedding_Attire___Timeless_Ethnic_Fashion_dwlxhs.jpg" },
  { id: 8, name: "Maroon Kurta Suit", price: 11000, category: "Men", image: "https://res.cloudinary.com/ddvpggeli/image/upload/f_auto,q_auto/v1782472540/download_1_ducq3v.jpg" },
  { id: 9, name: "Brown Waistcoat Shalwar", price: 9000, category: "Men", image: "https://res.cloudinary.com/ddvpggeli/image/upload/f_auto,q_auto/v1782472540/download_2_xhtndh.jpg" },
  { id: 10, name: "Brown Kurta Waistcoat", price: 8000, category: "Men", image: "https://res.cloudinary.com/ddvpggeli/image/upload/f_auto,q_auto/v1782472540/download_3_ne2bbw.jpg" },
];

const sizes = ["S", "M", "L", "XL"];

function Products({ cart, setCart }) {
  const [filter, setFilter] = useState("All");
  const [selectedSizes, setSelectedSizes] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const navigate = useNavigate();

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes({ ...selectedSizes, [productId]: size });
  };

  const addToCart = (product, size) => {
    if (!size) { alert("Please select a size first!"); return; }
    setCart([...cart, { ...product, size }]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const filteredProducts = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* Cart Button */}
      <div style={{ textAlign: 'right', padding: '16px 32px' }}>
        <button onClick={() => setShowCart(!showCart)} style={{ background: '#ec4899', color: 'white', padding: '10px 24px', borderRadius: '999px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
          🛒 Cart ({cart.length})
        </button>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div style={{ position: 'fixed', right: 0, top: 0, height: '100%', width: '320px', background: '#111827', zIndex: 100, padding: '24px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h2 style={{ color: '#ec4899', fontSize: '20px', fontWeight: 'bold' }}>Your Cart 🛒</h2>
            <button onClick={() => setShowCart(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>✕</button>
          </div>
          {cart.length === 0 ? (
            <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: '40px' }}>Cart is empty!</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} style={{ background: '#1f2937', borderRadius: '12px', padding: '12px', marginBottom: '12px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <img src={item.image} alt={item.name} style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.name}</p>
                    <p style={{ color: '#ec4899', fontSize: '14px' }}>Size: {item.size}</p>
                    <p style={{ color: '#ec4899', fontWeight: 'bold' }}>Rs. {item.price.toLocaleString()}</p>
                  </div>
                  <button onClick={() => removeFromCart(index)} style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer', fontSize: '20px' }}>🗑</button>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #374151', marginTop: '16px', paddingTop: '16px' }}>
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Total: <span style={{ color: '#ec4899' }}>Rs. {totalPrice.toLocaleString()}</span></p>
                <button
                  onClick={() => { setShowCart(false); navigate('/checkout'); }}
                  style={{ marginTop: '16px', width: '100%', background: '#ec4899', color: 'white', padding: '12px', borderRadius: '999px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
                  Checkout →
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Modal */}
      {modalProduct && (
        <div onClick={() => setModalProduct(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#111827', borderRadius: '16px', overflow: 'hidden', maxWidth: '600px', width: '100%' }}>
            <img src={modalProduct.image} alt={modalProduct.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} />
            <div style={{ padding: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{modalProduct.name}</h2>
              <p style={{ color: '#ec4899', fontSize: '28px', fontWeight: 'bold', margin: '8px 0' }}>Rs. {modalProduct.price.toLocaleString()}</p>
              <div style={{ display: 'flex', gap: '8px', margin: '16px 0' }}>
                {sizes.map(size => (
                  <button key={size} onClick={() => handleSizeSelect(modalProduct.id, size)}
                    style={{ padding: '8px 16px', borderRadius: '8px', border: `2px solid ${selectedSizes[modalProduct.id] === size ? '#ec4899' : '#374151'}`, background: selectedSizes[modalProduct.id] === size ? '#ec4899' : 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                    {size}
                  </button>
                ))}
              </div>
              <button onClick={() => { addToCart(modalProduct, selectedSizes[modalProduct.id]); setModalProduct(null); }}
                style={{ width: '100%', background: '#ec4899', color: 'white', padding: '12px', borderRadius: '999px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px', marginBottom: '8px' }}>
                Add to Cart 🛒
              </button>
              <button onClick={() => setModalProduct(null)}
                style={{ width: '100%', background: '#374151', color: 'white', padding: '12px', borderRadius: '999px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
        {["All", "Men", "Women"].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}
            style={{ padding: '8px 24px', borderRadius: '999px', fontWeight: 'bold', border: 'none', cursor: 'pointer', background: filter === cat ? '#ec4899' : '#374151', color: 'white' }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', padding: '0 32px 64px' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ background: '#111827', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            <div style={{ cursor: 'pointer' }} onClick={() => setModalProduct(product)}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '280px', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div style={{ padding: '16px' }}>
              <span style={{ color: '#ec4899', fontSize: '12px', fontWeight: 'bold' }}>{product.category}</span>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0' }}>{product.name}</h3>
              <p style={{ color: '#ec4899', fontWeight: 'bold', fontSize: '20px', margin: '4px 0' }}>Rs. {product.price.toLocaleString()}</p>
              <div style={{ display: 'flex', gap: '8px', margin: '12px 0' }}>
                {sizes.map(size => (
                  <button key={size} onClick={() => handleSizeSelect(product.id, size)}
                    style={{ padding: '4px 12px', borderRadius: '8px', border: `2px solid ${selectedSizes[product.id] === size ? '#ec4899' : '#374151'}`, background: selectedSizes[product.id] === size ? '#ec4899' : 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                    {size}
                  </button>
                ))}
              </div>
              <button onClick={() => addToCart(product, selectedSizes[product.id])}
                style={{ width: '100%', background: '#ec4899', color: 'white', padding: '10px', borderRadius: '999px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;