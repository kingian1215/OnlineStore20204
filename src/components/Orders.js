import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Orders() {
  const user = useSelector(state => state.user.userInfo);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(`/api/orders/${user._id}`);
      setOrders(response.data);
    };

    fetchOrders();
  }, [user]);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
            <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
            <p>Discounted Total: ${order.discountedTotal.toFixed(2)}</p>
            <p>Discount Applied: {order.discountApplied}%</p>
            <p>Order Status: {order.isCompleted ? 'Completed' : 'Pending'}</p>
            <ul>
              {order.products.map(product => (
                <li key={product.name}>
                  {product.name} - {product.quantity} x ${product.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
