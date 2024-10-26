import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setOrders } from '../redux/userSlice';

function Profile() {
  const user = useSelector(state => state.user.userInfo);
  const orders = useSelector(state => state.user.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(`/api/orders/${user._id}`);
      dispatch(setOrders(response.data));
    };
    fetchOrders();
  }, [user, dispatch]);

  return (
    <div>
      <h2>Profile</h2>
      <p>Member ID: {user._id}</p>
      <p>Name: {user.name}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
      <p>Email: {user.email}</p>
      <h3>Order History</h3>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            {order.date} - Total: ${order.total} - Points Earned: {order.points}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
