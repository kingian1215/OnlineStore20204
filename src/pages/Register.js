// src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import Header from '../components/Header';  
import Footer from '../components/Footer';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', formData);
      alert('Registration successful!');
    } catch (error) {
      alert('Error registering');
    }
  };

  return (
    <div className="register-container">
      <Header />
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="ConfirmPassword" required />
          <button type="submit">Register</button>
        </form>
      <Footer />
    </div>
  );
}

export default Register;
