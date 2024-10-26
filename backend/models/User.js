const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  email: String,
  password: String,
  totalSpent: { type: Number, default: 0 },  // 新增累積消費金額
  membershipLevel: { type: String, default: 'OrdinaryMember' },  // 初始會員等級
});

userSchema.methods.updateMembershipLevel = function () {
  if (this.totalSpent >= 100000) {
    this.membershipLevel = 'PlatinumMember';
  } else if (this.totalSpent >= 50000) {
    this.membershipLevel = 'DiamondMember';
  } else if (this.totalSpent >= 10000) {
    this.membershipLevel = 'GoldMember';
  } else {
    this.membershipLevel = 'OrdinaryMember';
  }
};

module.exports = mongoose.model('User', userSchema);
