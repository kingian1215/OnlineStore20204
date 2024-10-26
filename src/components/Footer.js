import React from 'react';

function Footer() {
  return (
    <footer className="ftco-footer">
      <div className="container">
        <div className="row mb-5">
          {/* Footer Logo Section */}
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo"><a href="/">Liquor <span>Store</span></a></h2>
              <p>Far far away, behind the word mountains, far from the countries.</p>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li className="ftco-animate"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><span className="fa fa-twitter"></span></a></li>
                <li className="ftco-animate"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><span className="fa fa-facebook"></span></a></li>
                <li className="ftco-animate"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span className="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>

          {/* My Accounts Section */}
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">My Accounts</h2>
              <ul className="list-unstyled">
                <li><a href="/account"><span className="fa fa-chevron-right mr-2"></span>My Account</a></li>
                <li><a href="/register"><span className="fa fa-chevron-right mr-2"></span>Register</a></li>
                <li><a href="/login"><span className="fa fa-chevron-right mr-2"></span>Log In</a></li>
                <li><a href="/order"><span className="fa fa-chevron-right mr-2"></span>My Order</a></li>
              </ul>
            </div>
          </div>

          {/* Information Section */}
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li><a href="/about"><span className="fa fa-chevron-right mr-2"></span>About us</a></li>
                <li><a href="/catalog"><span className="fa fa-chevron-right mr-2"></span>Catalog</a></li>
                <li><a href="/contact"><span className="fa fa-chevron-right mr-2"></span>Contact us</a></li>
                <li><a href="/terms"><span className="fa fa-chevron-right mr-2"></span>Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Quick Link</h2>
              <ul className="list-unstyled">
                <li><a href="/new-user"><span className="fa fa-chevron-right mr-2"></span>New User</a></li>
                <li><a href="/help-center"><span className="fa fa-chevron-right mr-2"></span>Help Center</a></li>
                <li><a href="/report-spam"><span className="fa fa-chevron-right mr-2"></span>Report Spam</a></li>
                <li><a href="/faqs"><span className="fa fa-chevron-right mr-2"></span>FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon fa fa-map marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><a href="tel:+23923929210"><span className="icon fa fa-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                  <li><a href="mailto:info@yourdomain.com"><span className="icon fa fa-paper-plane pr-4"></span><span className="text">info@yourdomain.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container-fluid px-0 py-5 bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0" style={{color: 'rgba(255,255,255,.5)'}}>
                Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with
                <i className="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
