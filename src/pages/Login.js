// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import Header from '../components/Header';  
import Footer from '../components/Footer';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', formData);
      alert('Login successful!');
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <div className="login-page">
      <Header />
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      <Footer />
    </div>
  );
}

export default Login;
