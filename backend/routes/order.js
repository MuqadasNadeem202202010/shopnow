const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/place', async (req, res) => {
  try {
    const { name, phone, city, address, cart, total } = req.body;
    console.log('Order received:', name, phone);

    await transporter.sendMail({
      from: '"ShopNow.pk" <b18a2f001@smtp-brevo.com>',
      to: process.env.ADMIN_EMAIL,
      subject: '🛍️ New Order on ShopNow.pk!',
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2 style="color: #ec4899;">New Order! 🎉</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>City:</b> ${city}</p>
          <p><b>Address:</b> ${address}</p>
          <h3>Items:</h3>
          ${cart.map(item => `<p>${item.name} | Size: ${item.size} | Rs. ${item.price.toLocaleString()}</p>`).join('')}
          <h3>Total: Rs. ${total.toLocaleString()}</h3>
        </div>
      `
    });

    res.status(200).json({ message: 'Order placed successfully!' });

  } catch (error) {
    console.log('Order error:', error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;