import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

const Home = () => {
  return (
    <div className="boxed_wrapper">
  <div className="switcher">
    <div className="switch_btn">
      <button><i className="fas fa-palette" /></button>
    </div>
    <div className="switch_menu">
      {/* color changer */}
      <div className="switcher_container">
        <ul id="styleOptions" title="switch styling">
          <li>
            <a href="javascript: void(0)" data-theme="green" className="green-color" />
          </li>
          <li>
            <a href="javascript: void(0)" data-theme="pink" className="pink-color" />
          </li>
          <li>
            <a href="javascript: void(0)" data-theme="violet" className="violet-color" />
          </li>
          <li>
            <a href="javascript: void(0)" data-theme="crimson" className="crimson-color" />
          </li>
          <li>
            <a href="javascript: void(0)" data-theme="orange" className="orange-color" />
          </li>
        </ul>
      </div> 
    </div>
  </div>
  {/* end switcher menu */}
  {/* main header */}
  <Header/>
  {/* main-header end */}
  {/* Mobile Menu  */}
  <div className="mobile-menu">
    <div className="menu-backdrop" />
    <div className="close-btn"><i className="fas fa-times" /></div>
    <nav className="menu-box">
      <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-2.png" alt title /></a></div>
      <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
      <div className="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li>Chicago 12, Melborne City, USA</li>
          <li><a href="tel:+8801682648101">+88 01682648101</a></li>
          <li><a href="mailto:info@example.com">info@example.com</a></li>
        </ul>
      </div>
      <div className="social-links">
        <ul className="clearfix">
          <li><a href="index.html"><span className="fab fa-twitter" /></a></li>
          <li><a href="index.html"><span className="fab fa-facebook-square" /></a></li>
          <li><a href="index.html"><span className="fab fa-pinterest-p" /></a></li>
          <li><a href="index.html"><span className="fab fa-instagram" /></a></li>
          <li><a href="index.html"><span className="fab fa-youtube" /></a></li>
        </ul>
      </div>
    </nav>
  </div>{/* End Mobile Menu */}
  {/*Page Title*/}
  <section className="page-title centred" style={{backgroundImage: 'url(assets/images/background/page-title-3.jpg)'}}>
    <div className="auto-container">
      <div className="content-box clearfix">
        <h1>About Us</h1>
        <ul className="bread-crumb clearfix">
          <li><a href="index.html">Home</a></li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  </section>
  {/*End Page Title*/}
  {/* about-section */}
  <section className="about-section about-page pb-0">
    <div className="auto-container">
      <div className="inner-container">
        <div className="row align-items-center clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_2">
              <div className="image-box">
                <figure className="image"><img src="assets/images/resource/about-1.jpg" alt /></figure>
                <div className="text wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <h2>20</h2>
                  <h4>Years of <br />Experience</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_3">
              <div className="content-box">
                <div className="sec-title">
                  <h5>About</h5>
                  <h2>Hi, I’m Jessica Blake</h2>
                </div>
                <div className="text">
                  <p>Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris aliquip ex ea commodo consequat duis aute irure.</p>
                  <p>dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                </div>
                <ul className="list clearfix">
                  <li>consectetur elit sed do eius</li>
                  <li>consectetur elit sed</li>
                </ul>
                <div className="btn-box">
                  <a href="contact.html" className="theme-btn btn-one">Contact With Me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about-section end */}
  {/* feature-style-three */}
  <section className="feature-style-three centred pb-110">
    <div className="auto-container">
      <div className="sec-title">
        <h5>Our Services</h5>
        <h2>Property Services</h2>
      </div>
      <div className="three-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-1" /></div>
            <h4>Excellent Reputation</h4>
            <p>Lorem ipsum dolor sit consectetur sed eiusm tempor incididunt dolore magna.</p>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-26" /></div>
            <h4>Best Local Agents</h4>
            <p>Lorem ipsum dolor sit consectetur sed eiusm tempor incididunt dolore magna.</p>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-21" /></div>
            <h4>Personalized Service</h4>
            <p>Lorem ipsum dolor sit consectetur sed eiusm tempor incididunt dolore magna.</p>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-1" /></div>
            <h4>Excellent Reputation</h4>
            <p>Lorem ipsum dolor sit consectetur sed eiusm tempor incididunt dolore magna.</p>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-26" /></div>
            <h4>Best Local Agents</h4>
            <p>Lorem ipsum dolor sit consectetur sed eiusm tempor incididunt dolore magna.</p>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-21" /></div>
            <h4>Personalized Service</h4>
            <p>Lorem ipsum dolor sit consectetur sed eiusm tempor incididunt dolore magna.</p>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-1" /></div>
            <h4>Excellent Reputation</h4>
            <p>Lorem ipsum dolor sit consectetur sed eiusm tempor incididunt dolore magna.</p>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-26" /></div>
            <h4>Best Local Agents</h4>
            <p>Lorem ipsum dolor sit consectetur sed eiusm tempor incididunt dolore magna.</p>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-21" /></div>
            <h4>Personalized Service</h4>
            <p>Lorem ipsum dolor sit consectetur sed eiusm tempor incididunt dolore magna.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* feature-style-three end */}
  {/* cta-section */}
  <section className="cta-section alternate-2 pb-240 centred" style={{backgroundImage: 'url(assets/images/background/cta-1.jpg)'}}>
    <div className="auto-container">
      <div className="inner-box clearfix">
        <div className="text">
          <h2>Looking to Buy a New Property or <br />Sell an Existing One?</h2>
        </div>
        <div className="btn-box">
          <a href="property-details.html" className="theme-btn btn-three">Rent Properties</a>
          <a href="index.html" className="theme-btn btn-one">Buy Properties</a>
        </div>
      </div>
    </div>
  </section>
  {/* cta-section end */}
  {/* funfact-section */}
  <section className="funfact-section centred">
    <div className="auto-container">
      <div className="inner-container wow slideInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={1500} data-stop={1270}>0</span>
                </div>
                <p>Total Professionals</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={1500} data-stop={2350}>0</span>
                </div>
                <p>Total Property Sell</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={1500} data-stop={2540}>0</span>
                </div>
                <p>Total Property Rent</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={1500} data-stop={8270}>0</span>
                </div>
                <p>Total Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* funfact-section end */}
  {/* testimonial-style-four */}
  <section className="testimonial-style-four sec-pad centred">
    <div className="auto-container">
      <div className="sec-title">
        <h5>Testimonials</h5>
        <h2>What They Say About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt <br />labore dolore magna aliqua enim.</p>
      </div>
      <div className="three-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
        <div className="testimonial-block-three">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-18" /></div>
            <h4>“Our goal each day is to ensure that our residents’ needs are not only met but exceeded.”</h4>
            <h5>Rebeka Dawson</h5>
            <span className="designation">Instructor</span>
          </div>
        </div>
        <div className="testimonial-block-three">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-18" /></div>
            <h4>“Our goal each day is to ensure that our residents’ needs are not only met but exceeded.”</h4>
            <h5>Marc Kenneth</h5>
            <span className="designation">Founder CEO</span>
          </div>
        </div>
        <div className="testimonial-block-three">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-18" /></div>
            <h4>“Our goal each day is to ensure that our residents’ needs are not only met but exceeded.”</h4>
            <h5>Owen Lester</h5>
            <span className="designation">Manager</span>
          </div>
        </div>
        <div className="testimonial-block-three">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-18" /></div>
            <h4>“Our goal each day is to ensure that our residents’ needs are not only met but exceeded.”</h4>
            <h5>Rebeka Dawson</h5>
            <span className="designation">Instructor</span>
          </div>
        </div>
        <div className="testimonial-block-three">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-18" /></div>
            <h4>“Our goal each day is to ensure that our residents’ needs are not only met but exceeded.”</h4>
            <h5>Marc Kenneth</h5>
            <span className="designation">Founder CEO</span>
          </div>
        </div>
        <div className="testimonial-block-three">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-18" /></div>
            <h4>“Our goal each day is to ensure that our residents’ needs are not only met but exceeded.”</h4>
            <h5>Owen Lester</h5>
            <span className="designation">Manager</span>
          </div>
        </div>
        <div className="testimonial-block-three">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-18" /></div>
            <h4>“Our goal each day is to ensure that our residents’ needs are not only met but exceeded.”</h4>
            <h5>Rebeka Dawson</h5>
            <span className="designation">Instructor</span>
          </div>
        </div>
        <div className="testimonial-block-three">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-18" /></div>
            <h4>“Our goal each day is to ensure that our residents’ needs are not only met but exceeded.”</h4>
            <h5>Marc Kenneth</h5>
            <span className="designation">Founder CEO</span>
          </div>
        </div>
        <div className="testimonial-block-three">
          <div className="inner-box">
            <div className="icon-box"><i className="icon-18" /></div>
            <h4>“Our goal each day is to ensure that our residents’ needs are not only met but exceeded.”</h4>
            <h5>Owen Lester</h5>
            <span className="designation">Manager</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* testimonial-style-four end */}
  {/* clients-section */}
  <section className="clients-section bg-color-1">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}} />
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-4 col-md-12 col-sm-12 title-column">
          <div className="sec-title">
            <h5>Our Pertners</h5>
            <h2>We’re going to Became Partners for the Long Run.</h2>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
          <div className="clients-logo">
            <ul className="logo-list clearfix">
              <li>
                <figure className="logo"><a href="index-2.html"><img src="assets/images/clients/clients-1.png" alt /></a></figure>
              </li>
              <li>
                <figure className="logo"><a href="index-2.html"><img src="assets/images/clients/clients-2.png" alt /></a></figure>
              </li>
              <li>
                <figure className="logo"><a href="index-2.html"><img src="assets/images/clients/clients-3.png" alt /></a></figure>
              </li>
              <li>
                <figure className="logo"><a href="index-2.html"><img src="assets/images/clients/clients-4.png" alt /></a></figure>
              </li>
              <li>
                <figure className="logo"><a href="index-2.html"><img src="assets/images/clients/clients-5.png" alt /></a></figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* clients-section end */}
  {/* team-section */}
  <section className="team-section sec-pad centred">
    <div className="auto-container">
      <div className="sec-title">
        <h5>Our Agents</h5>
        <h2>Meet Our Excellent Agents</h2>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
          <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/team/team-6.jpg" alt /></figure>
              <div className="lower-content">
                <div className="inner">
                  <h4><a href="agents-details.html">Jennifer Lawrence</a></h4>
                  <span className="designation">Senior Agent</span>
                  <ul className="social-links clearfix">
                    <li><a href="index.html"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="index.html"><i className="fab fa-twitter" /></a></li>
                    <li><a href="index.html"><i className="fab fa-google-plus-g" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
          <div className="team-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/team/team-7.jpg" alt /></figure>
              <div className="lower-content">
                <div className="inner">
                  <h4><a href="agents-details.html">Benedict Cumberbatch</a></h4>
                  <span className="designation">Senior Agent</span>
                  <ul className="social-links clearfix">
                    <li><a href="index.html"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="index.html"><i className="fab fa-twitter" /></a></li>
                    <li><a href="index.html"><i className="fab fa-google-plus-g" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
          <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/team/team-8.jpg" alt /></figure>
              <div className="lower-content">
                <div className="inner">
                  <h4><a href="agents-details.html">Elizabeth Winstead</a></h4>
                  <span className="designation">Senior Agent</span>
                  <ul className="social-links clearfix">
                    <li><a href="index.html"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="index.html"><i className="fab fa-twitter" /></a></li>
                    <li><a href="index.html"><i className="fab fa-google-plus-g" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* team-section end */}
  {/* download-section */}
  <section className="download-section bg-color-3">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-3.png)'}} />
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
          <div className="image-box">
            <figure className="image image-1 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="assets/images/resource/download-1.png" alt /></figure>
            <figure className="image image-2 wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms"><img src="assets/images/resource/download-2.png" alt /></figure>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
          <div className="content_block_1">
            <div className="content-box">
              <span>Download</span>
              <h2>Download Our Android and IOS App for Experience</h2>
              <div className="download-btn">
                <a href="index.html" className="app-store">
                  <i className="fab fa-apple" />
                  <p>Download on</p>
                  <h4>App Store</h4>
                </a>
                <a href="index.html" className="google-play">
                  <i className="fab fa-google-play" />
                  <p>Get It On</p>
                  <h4>Google Play</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* download-section end */}
  {/* main-footer */}
  <Footer/>
  {/* main-footer end */}
  {/*Scroll to top*/}
  <button className="scroll-top scroll-to-target" data-target="html">
    <span className="fal fa-angle-up" />
  </button>
</div>


  )
}

export default Home