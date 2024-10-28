// src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import Header from '../components/Header';  
import Footer from '../components/Footer';

function Register() {
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    try {
      await axios.post('/api/auth/register', formData);
      alert('Registration successful!');
    } catch (error) {
      alert('Error registering');
    }
  };

  return (
    <div className="container">
      <Header />
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
      <Footer />
    </div>
  );
}

export default Register;

