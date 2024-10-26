const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
  totalAmount: Number,  // 訂單原價總額
  discountedTotal: Number,  // 折扣後總額
  discountApplied: Number,  // 折扣百分比
  recipient: {
    name: String,
    address: String,
    phone: String,
  },
  orderDate: { type: Date, default: Date.now },
  isCompleted: { type: Boolean, default: false },  // 系統管理者備註
});

module.exports = mongoose.model('Order', orderSchema);
