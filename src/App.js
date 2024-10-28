// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import React from 'react';
import HomePage from './components/HomePage.js';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
// import Login from './components/Login';
// import Register from './components/Register';
import Profile from './components/Profile';
import Orders from './components/Orders';
import Register from './pages/Register';
import Login from './pages/Login';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import BlogPage from './components/Blog';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes> 
      {/* <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch> */}
    </Router>
    
  );
}

export default App;