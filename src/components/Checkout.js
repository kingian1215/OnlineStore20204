import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Checkout() {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.user.userInfo);
  const [discount, setDiscount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountedTotal, setDiscountedTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalAmount(total);

    // 根據會員等級設置折扣
    if (user.membershipLevel === 'GoldMember') {
      setDiscount(0.95);
    } else if (user.membershipLevel === 'DiamondMember') {
      setDiscount(0.9);
    } else if (user.membershipLevel === 'PlatinumMember') {
      setDiscount(0.85);
    }
    
    setDiscountedTotal(total * discount);
  }, [cartItems, user, discount]);

  const handlePlaceOrder = async () => {
    const recipient = {
      name: user.name,
      address: user.address,
      phone: user.phone,
    };

    await axios.post('/api/orders/new', {
      userId: user._id,
      products: cartItems,
      recipient,
    });

    // 清空購物車或其他操作
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <p>Discount: {((1 - discount) * 100).toFixed(2)}%</p>
      <p>Discounted Total: ${discountedTotal.toFixed(2)}</p>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;
