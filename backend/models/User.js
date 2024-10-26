// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  memberLevel: {
    type: String,
    enum: ['OrdinaryMember', 'GoldMember', 'DiamondMember', 'PlatinumMember'],
    default: 'OrdinaryMember',
  },
  totalSpent: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.updateMemberLevel = function() {
  if (this.totalSpent >= 100000) {
    this.memberLevel = 'PlatinumMember';
  } else if (this.totalSpent >= 50000) {
    this.memberLevel = 'DiamondMember';
  } else if (this.totalSpent >= 10000) {
    this.memberLevel = 'GoldMember';
  } else {
    this.memberLevel = 'OrdinaryMember';
  }
};

const User = mongoose.model('User', userSchema);
module.exports = User;
