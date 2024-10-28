import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function Header() {
  const [cartItems, setCartItems] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false); // 控制下拉菜單狀態

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/cart-items');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <header>
      <div className="wrap">
        {/* 其他內容 */}
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">我的 <span>商店</span></a>
          <div className="order-lg-last btn-group">
            <button className="btn-cart dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="flaticon-shopping-bag"></span>
              <div className="d-flex justify-content-center align-items-center"><small>{cartItems.length}</small></div>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              {cartItems.map(item => (
                <div className="dropdown-item d-flex align-items-start" key={item._id}>
                  <div className="img" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                  <div className="text pl-3">
                    <h4>{item.name}</h4>
                    <p className="mb-0"><span className="price">${item.price.toFixed(2)}</span><span className="quantity ml-3">Quantity: {item.quantity}</span></p>
                  </div>
                </div>
              ))}
              <a className="dropdown-item text-center btn-link d-block w-100" href="cart.html">
                View All <span className="ion-ios-arrow-round-forward"></span>
              </a>
            </div>
          </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  id="dropdown04"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen} // 根據狀態設置 aria-expanded
                  onClick={() => setDropdownOpen(!dropdownOpen)} // 切換下拉菜單狀態
                >
                  Products
                </button>
                {dropdownOpen && ( // 根據狀態顯示下拉菜單
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <a className="dropdown-item" href="/profile">Products</a>
                    <a className="dropdown-item" href="/">Single Product</a>
                    <a className="dropdown-item" href="/cart">Cart</a>
                    <a className="dropdown-item" href="/checkout">Checkout</a>
                  </div>
                )}
              </li>
              <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
