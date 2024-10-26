// 引入所需模組
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 初始化 Express
const app = express();
app.use(cors());
app.use(express.json());

// 連接 MongoDB
mongoose.connect('mongodb://localhost:27017/shoppingCartDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

// 定義 Schema 和 Model
const cartItemSchema = new mongoose.Schema({
  category: String,
  name: String,
  price: Number,
  quantity: Number,
  imageUrl: String,
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// 建立 API 端點來獲取商品資料
app.get('/api/products', async (req, res) => {
  try {
    const products = await CartItem.find();  // 從 MongoDB 讀取所有產品
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// 設置伺服器端口
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
