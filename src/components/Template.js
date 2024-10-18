// src/components/Template.js
import React from 'react';
import './public/css/flaticon.css';
import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";


const Template = () => {
  return (
    <div>
      {/* 將 Bootstrap 模板的 HTML 代碼粘貼在這裡
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a> */}
      <html   key="1"  lang="en">
        <head>
          <title>
            Liquor Store - Free Bootstrap 4 Template by Colorlib
          </title>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;1,200;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            href="css/animate.css"
            rel="stylesheet"
          />
          <link
            href="css/owl.carousel.min.css"
            rel="stylesheet"
          />
          <link
            href="css/owl.theme.default.min.css"
            rel="stylesheet"
          />
          <link
            href="css/magnific-popup.css"
            rel="stylesheet"
          />
          <link
            href="css/flaticon.css"
            rel="stylesheet"
          />
          <link
            href="css/style.css"
            rel="stylesheet"
          />
        </head>
        <body>
          <div className="wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <p className="mb-0 phone pl-md-2">
                    <a
                      className="mr-2"
                      href="#"
                    >
                      <span className="fa fa-phone mr-1" />
                      {' '}+00 1234 567
                    </a>
                    <a href="#">
                      <span className="fa fa-paper-plane mr-1" />
                      {' '}youremail@email.com
                    </a>
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-md-end">
                  <div className="social-media mr-4">
                    <p className="mb-0 d-flex">
                      <a
                        className="d-flex align-items-center justify-content-center"
                        href="#"
                      >
                        <span className="fa fa-facebook">
                          <i className="sr-only">
                            Facebook
                          </i>
                        </span>
                      </a>
                      <a
                        className="d-flex align-items-center justify-content-center"
                        href="#"
                      >
                        <span className="fa fa-twitter">
                          <i className="sr-only">
                            Twitter
                          </i>
                        </span>
                      </a>
                      <a
                        className="d-flex align-items-center justify-content-center"
                        href="#"
                      >
                        <span className="fa fa-instagram">
                          <i className="sr-only">
                            Instagram
                          </i>
                        </span>
                      </a>
                      <a
                        className="d-flex align-items-center justify-content-center"
                        href="#"
                      >
                        <span className="fa fa-dribbble">
                          <i className="sr-only">
                            Dribbble
                          </i>
                        </span>
                      </a>
                    </p>
                  </div>
                  <div className="reg">
                    <p className="mb-0">
                      <a
                        className="mr-2"
                        href="#"
                      >
                        Sign Up
                      </a>
                      {' '}
                      <a href="#">
                        Log In
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
          >
            <div className="container">
              <a
                className="navbar-brand"
                href="index.html"
              >
                Liquor{' '}
                <span>
                  store
                </span>
              </a>
              <div className="order-lg-last btn-group">
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="btn-cart dropdown-toggle dropdown-toggle-split"
                  data-toggle="dropdown"
                  href="#"
                >
                  <span className="flaticon-shopping-bag" />
                  <div className="d-flex justify-content-center align-items-center">
                    <small>
                      3
                    </small>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div
                    className="dropdown-item d-flex align-items-start"
                    href="#">
                    <div
                      className="img"
                      style={{
                        backgroundImage: 'url(images/prod-1.jpg)'
                      }}
                    />
                    <div className="text pl-3">
                      <h4>
                        Bacardi 151
                      </h4>
                      <p className="mb-0">
                        <a className="price" href="#" >
                          $25.99
                        </a>
                        <span className="quantity ml-3">
                          Quantity: 01
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    className="dropdown-item d-flex align-items-start"
                    href="#"
                  >
                    <div
                      className="img"
                      style={{
                        backgroundImage: 'url(images/prod-2.jpg)'
                      }}
                    />
                    <div className="text pl-3">
                      <h4>
                        Jim Beam Kentucky Straight
                      </h4>
                      <p className="mb-0">
                        <a
                          className="price"
                          href="#"
                        >
                          $30.89
                        </a>
                        <span className="quantity ml-3">
                          Quantity: 02
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    className="dropdown-item d-flex align-items-start"
                    href="#"
                  >
                    <div
                      className="img"
                      style={{
                        backgroundImage: 'url(images/prod-3.jpg)'
                      }}
                    />
                    <div className="text pl-3">
                      <h4>
                        Citadelle
                      </h4>
                      <p className="mb-0">
                        <a
                          className="price"
                          href="#"
                        >
                          $22.50
                        </a>
                        <span className="quantity ml-3">
                          Quantity: 01
                        </span>
                      </p>
                    </div>
                  </div>
                  <a
                    className="dropdown-item text-center btn-link d-block w-100"
                    href="cart.html"
                  >
                                  View All				    	
                    <span className="ion-ios-arrow-round-forward" />
                  </a>
                </div>
              </div>
              <button
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#ftco-nav"
                data-toggle="collapse"
                type="button"
              >
                <span className="oi oi-menu" />
                {' '}Menu
              </button>
              <div
                className="collapse navbar-collapse"
                id="ftco-nav"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      href="index.html"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="about.html"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      id="dropdown04"
                    >
                      Products
                    </a>
                    <div
                      aria-labelledby="dropdown04"
                      className="dropdown-menu"
                    >
                      <a
                        className="dropdown-item"
                        href="product.html"
                      >
                        Products
                      </a>
                      <a
                        className="dropdown-item"
                        href="product-single.html"
                      >
                        Single Product
                      </a>
                      <a
                        className="dropdown-item"
                        href="cart.html"
                      >
                        Cart
                      </a>
                      <a
                        className="dropdown-item"
                        href="checkout.html"
                      >
                        Checkout
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="blog.html"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="contact.html"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div
            className="hero-wrap"
            data-stellar-background-ratio="0.5"
            style={{
              backgroundImage: 'url(\'images/bg_2.jpg\')'
            }}
          >
            <div className="overlay" />
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-8 ftco-animate d-flex align-items-end">
                  <div className="text w-100 text-center">
                    <h1 className="mb-4">
                      Good{' '}
                      <span>
                        Drink
                      </span>
                      {' '}for Good{' '}
                      <span>
                        Moments
                      </span>
                      .
                    </h1>
                    <p>
                      <a
                        className="btn btn-primary py-2 px-4"
                        href="#"
                      >
                        Shop Now
                      </a>
                      {' '}
                      <a
                        className="btn btn-white btn-outline-white py-2 px-4"
                        href="#"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="ftco-intro">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-md-4 d-flex">
                  <div className="intro d-lg-flex w-100 ftco-animate">
                    <div className="icon">
                      <span className="flaticon-support" />
                    </div>
                    <div className="text">
                      <h2>
                        Online Support 24/7
                      </h2>
                      <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="intro color-1 d-lg-flex w-100 ftco-animate">
                    <div className="icon">
                      <span className="flaticon-cashback" />
                    </div>
                    <div className="text">
                      <h2>
                        Money Back Guarantee
                      </h2>
                      <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="intro color-2 d-lg-flex w-100 ftco-animate">
                    <div className="icon">
                      <span className="flaticon-free-delivery" />
                    </div>
                    <div className="text">
                      <h2>
                        Free Shipping & Return
                      </h2>
                      <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section ftco-no-pb">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 img img-3 d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: 'url(images/about.jpg)'
                  }}
                >
                </div>
                <div className="col-md-6 wrap-about pl-md-5 ftco-animate py-5">
                  <div className="heading-section">
                    <span className="subheading">
                      Since 1905
                    </span>
                    <h2 className="mb-4">
                      Desire Meets A New Taste
                    </h2>
                    <p>
                      A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                    <p>
                      On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
                    </p>
                    <p className="year">
                      <strong
                        className="number"
                        data-number="115"
                      >
                        0
                      </strong>
                      <span>
                        Years of Experience In Business
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section ftco-no-pb">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-4 ">
                  <div className="sort w-100 text-center ftco-animate">
                    <div
                      className="img"
                      style={{
                        backgroundImage: 'url(images/kind-1.jpg)'
                      }}
                    />
                    <h3>
                      Brandy
                    </h3>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <div className="sort w-100 text-center ftco-animate">
                    <div
                      className="img"
                      style={{
                        backgroundImage: 'url(images/kind-2.jpg)'
                      }}
                    />
                    <h3>
                      Gin
                    </h3>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <div className="sort w-100 text-center ftco-animate">
                    <div
                      className="img"
                      style={{
                        backgroundImage: 'url(images/kind-3.jpg)'
                      }}
                    />
                    <h3>
                      Rum
                    </h3>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <div className="sort w-100 text-center ftco-animate">
                    <div
                      className="img"
                      style={{
                        backgroundImage: 'url(images/kind-4.jpg)'
                      }}
                    />
                    <h3>
                      Tequila
                    </h3>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <div className="sort w-100 text-center ftco-animate">
                    <div
                      className="img"
                      style={{
                        backgroundImage: 'url(images/kind-5.jpg)'
                      }}
                    />
                    <h3>
                      Vodka
                    </h3>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <div className="sort w-100 text-center ftco-animate">
                    <div
                      className="img"
                      style={{
                        backgroundImage: 'url(images/kind-6.jpg)'
                      }}
                    />
                    <h3>
                      Whiskey
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center pb-5">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <span className="subheading">
                    Our Delightful offerings
                  </span>
                  <h2>
                    Tastefully Yours
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 d-flex">
                  <div className="product ftco-animate">
                    <div
                      className="img d-flex align-items-center justify-content-center"
                      style={{
                        backgroundImage: 'url(images/prod-1.jpg)'
                      }}
                    >
                      <div className="desc">
                        <p className="meta-prod d-flex">
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-shopping-bag" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-heart" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-visibility" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text text-center">
                      <span className="sale">
                        Sale
                      </span>
                      <span className="category">
                        Brandy
                      </span>
                      <h2>
                        Bacardi 151
                      </h2>
                      <p className="mb-0">
                        <span className="price price-sale">
                          $69.00
                        </span>
                        {' '}
                        <span className="price">
                          $49.00
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="product ftco-animate">
                    <div
                      className="img d-flex align-items-center justify-content-center"
                      style={{
                        backgroundImage: 'url(images/prod-2.jpg)'
                      }}
                    >
                      <div className="desc">
                        <p className="meta-prod d-flex">
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-shopping-bag" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-heart" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-visibility" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text text-center">
                      <span className="seller">
                        Best Seller
                      </span>
                      <span className="category">
                        Gin
                      </span>
                      <h2>
                        Jim Beam Kentucky Straight
                      </h2>
                      <span className="price">
                        $69.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="product ftco-animate">
                    <div
                      className="img d-flex align-items-center justify-content-center"
                      style={{
                        backgroundImage: 'url(images/prod-3.jpg)'
                      }}
                    >
                      <div className="desc">
                        <p className="meta-prod d-flex">
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-shopping-bag" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-heart" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-visibility" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text text-center">
                      <span className="new">
                        New Arrival
                      </span>
                      <span className="category">
                        Rum
                      </span>
                      <h2>
                        Citadelle
                      </h2>
                      <span className="price">
                        $69.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="product ftco-animate">
                    <div
                      className="img d-flex align-items-center justify-content-center"
                      style={{
                        backgroundImage: 'url(images/prod-4.jpg)'
                      }}
                    >
                      <div className="desc">
                        <p className="meta-prod d-flex">
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-shopping-bag" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-heart" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-visibility" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text text-center">
                      <span className="category">
                        Rum
                      </span>
                      <h2>
                        The Glenlivet
                      </h2>
                      <span className="price">
                        $69.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="product ftco-animate">
                    <div
                      className="img d-flex align-items-center justify-content-center"
                      style={{
                        backgroundImage: 'url(images/prod-5.jpg)'
                      }}
                    >
                      <div className="desc">
                        <p className="meta-prod d-flex">
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-shopping-bag" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-heart" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-visibility" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text text-center">
                      <span className="category">
                        Whiskey
                      </span>
                      <h2>
                        Black Label
                      </h2>
                      <span className="price">
                        $69.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="product ftco-animate">
                    <div
                      className="img d-flex align-items-center justify-content-center"
                      style={{
                        backgroundImage: 'url(images/prod-6.jpg)'
                      }}
                    >
                      <div className="desc">
                        <p className="meta-prod d-flex">
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-shopping-bag" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-heart" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-visibility" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text text-center">
                      <span className="category">
                        Tequila
                      </span>
                      <h2>
                        Macallan
                      </h2>
                      <span className="price">
                        $69.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="product ftco-animate">
                    <div
                      className="img d-flex align-items-center justify-content-center"
                      style={{
                        backgroundImage: 'url(images/prod-7.jpg)'
                      }}
                    >
                      <div className="desc">
                        <p className="meta-prod d-flex">
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-shopping-bag" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-heart" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-visibility" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text text-center">
                      <span className="category">
                        Vodka
                      </span>
                      <h2>
                        Old Monk
                      </h2>
                      <span className="price">
                        $69.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="product ftco-animate">
                    <div
                      className="img d-flex align-items-center justify-content-center"
                      style={{
                        backgroundImage: 'url(images/prod-8.jpg)'
                      }}
                    >
                      <div className="desc">
                        <p className="meta-prod d-flex">
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-shopping-bag" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-heart" />
                          </a>
                          <a
                            className="d-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <span className="flaticon-visibility" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text text-center">
                      <span className="category">
                        Whiskey
                      </span>
                      <h2>
                        Jameson Irish Whiskey
                      </h2>
                      <span className="price">
                        $69.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <a
                    className="btn btn-primary d-block"
                    href="product.html"
                  >
                    View All Products{' '}
                    <span className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            className="ftco-section testimony-section img"
            style={{
              backgroundImage: 'url(images/bg_4.jpg)'
            }}
          >
            <div className="overlay" />
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                  <span className="subheading">
                    Testimonial
                  </span>
                  <h2 className="mb-3">
                    Happy Clients
                  </h2>
                </div>
              </div>
              <div className="row ftco-animate">
                <div className="col-md-12">
                  <div className="carousel-testimony owl-carousel ftco-owl">
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: 'url(images/person_1.jpg)'
                              }}
                            />
                            <div className="pl-3">
                              <p className="name">
                                Roger Scott
                              </p>
                              <span className="position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: 'url(images/person_2.jpg)'
                              }}
                            />
                            <div className="pl-3">
                              <p className="name">
                                Roger Scott
                              </p>
                              <span className="position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: 'url(images/person_3.jpg)'
                              }}
                            />
                            <div className="pl-3">
                              <p className="name">
                                Roger Scott
                              </p>
                              <span className="position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: 'url(images/person_1.jpg)'
                              }}
                            />
                            <div className="pl-3">
                              <p className="name">
                                Roger Scott
                              </p>
                              <span className="position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: 'url(images/person_2.jpg)'
                              }}
                            />
                            <div className="pl-3">
                              <p className="name">
                                Roger Scott
                              </p>
                              <span className="position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <span className="subheading">
                    Blog
                  </span>
                  <h2>
                    Recent Blog
                  </h2>
                </div>
              </div>
              <div className="row d-flex">
                <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
                  <div className="blog-entry d-flex">
                    <a
                      className="block-20 img"
                      href="blog-single.html"
                      style={{
                        backgroundImage: 'url(\'images/image_1.jpg\')'
                      }}
                    >
                    </a>
                    <div className="text p-4 bg-light">
                      <div className="meta">
                        <p>
                          <span className="fa fa-calendar" />
                          {' '}23 April 2020
                        </p>
                      </div>
                      <h3 className="heading mb-3">
                        <a href="#">
                          The Recipe from a Winemaker’s Restaurent
                        </a>
                      </h3>
                      <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </p>
                      <a
                        className="btn-custom"
                        href="#"
                      >
                        Continue{' '}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
                  <div className="blog-entry d-flex">
                    <a
                      className="block-20 img"
                      href="blog-single.html"
                      style={{
                        backgroundImage: 'url(\'images/image_2.jpg\')'
                      }}
                    >
                    </a>
                    <div className="text p-4 bg-light">
                      <div className="meta">
                        <p>
                          <span className="fa fa-calendar" />
                          {' '}23 April 2020
                        </p>
                      </div>
                      <h3 className="heading mb-3">
                        <a href="#">
                          The Recipe from a Winemaker’s Restaurent
                        </a>
                      </h3>
                      <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </p>
                      <a
                        className="btn-custom"
                        href="#"
                      >
                        Continue{' '}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
                  <div className="blog-entry d-flex">
                    <a
                      className="block-20 img"
                      href="blog-single.html"
                      style={{
                        backgroundImage: 'url(\'images/image_3.jpg\')'
                      }}
                    >
                    </a>
                    <div className="text p-4 bg-light">
                      <div className="meta">
                        <p>
                          <span className="fa fa-calendar" />
                          {' '}23 April 2020
                        </p>
                      </div>
                      <h3 className="heading mb-3">
                        <a href="#">
                          The Recipe from a Winemaker’s Restaurent
                        </a>
                      </h3>
                      <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </p>
                      <a
                        className="btn-custom"
                        href="#"
                      >
                        Continue{' '}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
                  <div className="blog-entry d-flex">
                    <a
                      className="block-20 img"
                      href="blog-single.html"
                      style={{
                        backgroundImage: 'url(\'images/image_4.jpg\')'
                      }}
                    >
                    </a>
                    <div className="text p-4 bg-light">
                      <div className="meta">
                        <p>
                          <span className="fa fa-calendar" />
                          {' '}23 April 2020
                        </p>
                      </div>
                      <h3 className="heading mb-3">
                        <a href="#">
                          The Recipe from a Winemaker’s Restaurent
                        </a>
                      </h3>
                      <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </p>
                      <a
                        className="btn-custom"
                        href="#"
                      >
                        Continue{' '}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="ftco-footer">
            <div className="container">
              <div className="row mb-5">
                <div className="col-sm-12 col-md">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2 logo">
                      <a href="#">
                        Liquor{' '}
                        <span>
                          Store
                        </span>
                      </a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the countries.
                    </p>
                    <ul className="ftco-footer-social list-unstyled mt-2">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md">
                  <div className="ftco-footer-widget mb-4 ml-md-4">
                    <h2 className="ftco-heading-2">
                      My Accounts
                    </h2>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          My Account
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          Register
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          Log In
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          My Order
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md">
                  <div className="ftco-footer-widget mb-4 ml-md-4">
                    <h2 className="ftco-heading-2">
                      Information
                    </h2>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          About us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          Catalog
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          Contact us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          Term & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">
                      Quick Link
                    </h2>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          New User
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          Report Spam
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right mr-2" />
                          Faq's
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">
                      Have a Questions?
                    </h2>
                    <div className="block-23 mb-3">
                      <ul>
                        <li>
                          <span className="icon fa fa-map marker" />
                          <span className="text">
                            203 Fake St. Mountain View, San Francisco, California, USA
                          </span>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon fa fa-phone" />
                            <span className="text">
                              +2 392 3929 210
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon fa fa-paper-plane pr-4" />
                            <span className="text">
                              info@yourdomain.com
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid px-0 py-5 bg-black">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <p
                      className="mb-0"
                      style={{
                        color: 'rgba(255,255,255,.5)'
                      }}
                    >
                          Copyright ©
                      <script
                        dangerouslySetInnerHTML={{
                          __html: 'document.write(new Date().getFullYear());'
                        }}
                      />
                      {' '}All rights reserved | This template is made with{' '}
                      <i
                        aria-hidden="true"
                        className="fa fa-heart color-danger"
                      />
                      {' '}by{' '}
                      <a href="https://colorlib.com"  target="_blank" >
                        Colorlib.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div
            className="show fullscreen"
            id="ftco-loader"
          >
            <svg
              className="circular"
              height="48px"
              width="48px"
            >
              <circle
                className="path-bg"
                cx="24"
                cy="24"
                fill="none"
                r="22"
                stroke="#eeeeee"
                strokeWidth="4"
              />
              <circle
                className="path"
                cx="24"
                cy="24"
                fill="none"
                r="22"
                stroke="#F96D00"
                strokeMiterlimit="10"
                strokeWidth="4"
              />
            </svg>
          </div>
          <script src="js/jquery.min.js" />
          <script src="js/jquery-migrate-3.0.1.min.js" />
          <script src="js/popper.min.js" />
          <script src="js/bootstrap.min.js" />
          <script src="js/jquery.easing.1.3.js" />
          <script src="js/jquery.waypoints.min.js" />
          <script src="js/jquery.stellar.min.js" />
          <script src="js/owl.carousel.min.js" />
          <script src="js/jquery.magnific-popup.min.js" />
          <script src="js/jquery.animateNumber.min.js" />
          <script src="js/scrollax.min.js" />
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false" />
          <script src="js/google-map.js" />
          <script src="js/main.js" />
        </body>
      </html>
        {/* 更多 HTML 代碼 */}
      {/* </nav> */}
      {/* 其他內容 */}
    </div>
  );
};

export default Template;
