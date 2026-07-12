const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');

app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);

app.get('/', (req, res) => {
  res.send('ShopNow.pk Backend Running! 🚀');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected! ✅');
    app.listen(5000, () => {
      console.log('Server running on port 5000 🚀');
    });
  })
  .catch((err) => console.log(err));