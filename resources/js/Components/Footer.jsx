import React from 'react'

const Footer = () => {
  return (
      <div>
          <footer className="main-footer">
    <div className="footer-top bg-color-2">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget about-widget">
              <div className="widget-title">
                <h3>About</h3>
              </div>
              <div className="text">
                <p>Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor in cididunt ut labore dolore magna aliqua enim ad minim venitam</p>
                <p>Quis nostrud exercita laboris nisi ut aliquip commodo.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget ml-70">
              <div className="widget-title">
                <h3>Services</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list class">
                  <li><a href="index.html">About Us</a></li>
                  <li><a href="index.html">Listing</a></li>
                  <li><a href="index.html">How It Works</a></li>
                  <li><a href="index.html">Our Services</a></li>
                  <li><a href="index.html">Our Blog</a></li>
                  <li><a href="index.html">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget post-widget">
              <div className="widget-title">
                <h3>Top News</h3>
              </div>
              <div className="post-inner">
                <div className="post">
                  <figure className="post-thumb"><a href="blog-details.html"><img src="assets/images/resource/footer-post-1.jpg" alt /></a></figure>
                  <h5><a href="blog-details.html">The Added Value Social Worker</a></h5>
                  <p>Mar 25, 2020</p>
                </div>
                <div className="post">
                  <figure className="post-thumb"><a href="blog-details.html"><img src="assets/images/resource/footer-post-2.jpg" alt /></a></figure>
                  <h5><a href="blog-details.html">Ways to Increase Trust</a></h5>
                  <p>Mar 24, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget contact-widget">
              <div className="widget-title">
                <h3>Contacts</h3>
              </div>
              <div className="widget-content">
                <ul className="info-list clearfix">
                  <li><i className="fas fa-map-marker-alt" />Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</li>
                  <li><i className="fas fa-microphone" /><a href="tel:23055873407">+2(305) 587-3407</a></li>
                  <li><i className="fas fa-envelope" /><a href="mailto:info@example.com">info@example.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="inner-box clearfix">
          <figure className="footer-logo"><a href="index.html"><img src="assets/images/footer-logo.png" alt /></a></figure>
          <div className="copyright pull-left">
            <p><a href="index.html">Realshed</a> © 2021 All Right Reserved</p>
          </div>
          <ul className="footer-nav pull-right clearfix">
            <li><a href="index.html">Terms of Service</a></li>
            <li><a href="index.html">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer