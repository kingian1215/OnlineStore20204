const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/online-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// 路由
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
