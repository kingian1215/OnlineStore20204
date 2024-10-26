const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const User = require('../models/User');

router.post('/new', async (req, res) => {
  const { userId, products, recipient } = req.body;

  const user = await User.findById(userId);

  let totalAmount = 0;
  products.forEach(product => {
    totalAmount += product.price * product.quantity;
  });

  let discount = 1;
  if (user.membershipLevel === 'GoldMember') {
    discount = 0.95;
  } else if (user.membershipLevel === 'DiamondMember') {
    discount = 0.9;
  } else if (user.membershipLevel === 'PlatinumMember') {
    discount = 0.85;
  }

  const discountedTotal = totalAmount * discount;

  const newOrder = new Order({
    userId,
    products,
    totalAmount,
    discountedTotal,
    discountApplied: (1 - discount) * 100,
    recipient,
  });

  await newOrder.save();

  // 更新用戶的累積消費金額
  user.totalSpent += discountedTotal;
  user.updateMembershipLevel();  // 根據累積消費更新會員等級
  await user.save();

  res.status(201).json({ message: 'Order placed successfully', newOrder });
});

module.exports = router;
