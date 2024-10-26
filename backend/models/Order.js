const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  items: [orderItemSchema],

  totalAmount: {
    type: Number,
    required: true,
  },// 訂單原價總額

  discountedTotal: {
    type: Number,
    required: true,
  }, // 折扣後總額

  discountApplied: {
    type: Number,
    required: true, // 表示折扣百分比，如 5、10、15 等
  },

  recipient: {
    name: String,
    address: String,
    phone: String,
  },
  
  orderDate: { type: Date, default: Date.now },
  isCompleted: { type: Boolean, default: false },  // 系統管理者備註
});


module.exports = mongoose.model('Order', orderSchema);
