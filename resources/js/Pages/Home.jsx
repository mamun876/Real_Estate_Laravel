import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { usePage } from '@inertiajs/react'
import React from 'react'

const Home = (props) => {
  const { property, hot } = usePage().props
  console.log(hot);
  return (
    <div className="boxed_wrapper">
  <Header />
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
      

  {/* banner-section */}
  <section className="banner-section" style={{backgroundImage: 'url(assets/images/banner/banner-1.jpg)'}}>
    <div className="auto-container">
      <div className="inner-container">
        <div className="content-box centred">
          <h2>Create Lasting Wealth Through Realshed</h2>
          <p>Amet consectetur adipisicing elit sed do eiusmod.</p>
        </div>
        <div className="search-field">
          <div className="tabs-box">
            <div className="tab-btn-box">
              <ul className="tab-btns tab-buttons centred clearfix">
                <li className="tab-btn active-btn" data-tab="#tab-1">BUY</li>
                <li className="tab-btn" data-tab="#tab-2">RENT</li>
              </ul>
            </div>
            <div className="tabs-content info-group">
              <div className="tab active-tab" id="tab-1">
                <div className="inner-box">
                  <div className="top-search">
                    <form action="index.html" method="post" className="search-form">
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 column">
                          <div className="form-group">
                            <label>Search Property</label>
                            <div className="field-input">
                              <i className="fas fa-search" />
                              <input type="search" name="search-field" placeholder="Search by Property, Location or Landmark..." required />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Location</label>
                            <div className="select-box">
                              <i className="far fa-compass" />
                              <select className="wide">
                                <option data-display="Input location">Input location</option>
                                <option value={1}>New York</option>
                                <option value={2}>California</option>
                                <option value={3}>London</option>
                                <option value={4}>Maxico</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Property Type</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="All Type">All Type</option>
                                <option value={1}>Laxury</option>
                                <option value={2}>Classic</option>
                                <option value={3}>Modern</option>
                                <option value={4}>New</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="search-btn">
                        <button type="submit"><i className="fas fa-search" />Search</button>
                      </div>
                    </form>
                  </div>
                  <div className="switch_btn_one ">
                    <button className="nav-btn nav-toggler navSidebar-button clearfix search__toggler">Advanced Search<i className="fas fa-angle-down" /></button>
                    <div className="advanced-search">
                      <div className="close-btn">
                        <a href="#" className="close-side-widget"><i className="far fa-times" /></a>
                      </div>
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Distance from Location</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Distance from Location">Distance from Location</option>
                                <option value={1}>Max Bath</option>
                                <option value={2}>Within 1 Mile</option>
                                <option value={3}>Within 2 Mile</option>
                                <option value={4}>Within 3 Mile</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Bedrooms</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Max Rooms">Max Rooms</option>
                                <option value={1}>One Rooms</option>
                                <option value={2}>Two Rooms</option>
                                <option value={3}>Three Rooms</option>
                                <option value={4}>Four Rooms</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Sort by</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Most Popular">Most Popular</option>
                                <option value={1}>Top Rating</option>
                                <option value={2}>New Rooms</option>
                                <option value={3}>Classic Rooms</option>
                                <option value={4}>Luxry Rooms</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Floor</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Select Floor">Select Floor</option>
                                <option value={1}>One Floor</option>
                                <option value={2}>Two Floor</option>
                                <option value={3}>Three Floor</option>
                                <option value={4}>Four Floor</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Bath</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Max Bath">Max Bath</option>
                                <option value={1}>Max Bath</option>
                                <option value={2}>Max Bath</option>
                                <option value={3}>Max Bath</option>
                                <option value={4}>Max Bath</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Agencies</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Any Agency">Any Agency</option>
                                <option value={1}>Any Agency</option>
                                <option value={2}>Agency 01</option>
                                <option value={3}>Agency 02</option>
                                <option value={4}>Agency 03</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="range-box">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <div className="price-range">
                              <h6>Select Price Range</h6>
                              <div className="range-input">
                                <div className="input"><input type="text" className="property-amount" name="field-name" readOnly /></div>
                              </div>
                              <div className="price-range-slider" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <div className="area-range">
                              <h6>Select Area</h6>
                              <div className="range-input">
                                <div className="input"><input type="text" className="area-range" name="field-name" readOnly /></div>
                              </div>
                              <div className="area-range-slider" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab" id="tab-2">
                <div className="inner-box">
                  <div className="top-search">
                    <form action="index.html" method="post" className="search-form">
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 column">
                          <div className="form-group">
                            <label>Search Property</label>
                            <div className="field-input">
                              <i className="fas fa-search" />
                              <input type="search" name="search-field" placeholder="Search by Property, Location or Landmark..." required />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Location</label>
                            <div className="select-box">
                              <i className="far fa-compass" />
                              <select className="wide">
                                <option data-display="Input location">Input location</option>
                                <option value={1}>New York</option>
                                <option value={2}>California</option>
                                <option value={3}>London</option>
                                <option value={4}>Maxico</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Property Type</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="All Type">All Type</option>
                                <option value={1}>Laxury</option>
                                <option value={2}>Classic</option>
                                <option value={3}>Modern</option>
                                <option value={4}>New</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="search-btn">
                        <button type="submit"><i className="fas fa-search" />Search</button>
                      </div>
                    </form>
                  </div>
                  <div className="switch_btn_one ">
                    <button className="nav-btn nav-toggler navSidebar-button clearfix search__toggler">Advanced Search<i className="fas fa-angle-down" /></button>
                    <div className="advanced-search">
                      <div className="close-btn">
                        <a href="#" className="close-side-widget"><i className="far fa-times" /></a>
                      </div>
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Distance from Location</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Distance from Location">Distance from Location</option>
                                <option value={1}>Max Bath</option>
                                <option value={2}>Within 1 Mile</option>
                                <option value={3}>Within 2 Mile</option>
                                <option value={4}>Within 3 Mile</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Bedrooms</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Max Rooms">Max Rooms</option>
                                <option value={1}>One Rooms</option>
                                <option value={2}>Two Rooms</option>
                                <option value={3}>Three Rooms</option>
                                <option value={4}>Four Rooms</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Sort by</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Most Popular">Most Popular</option>
                                <option value={1}>Top Rating</option>
                                <option value={2}>New Rooms</option>
                                <option value={3}>Classic Rooms</option>
                                <option value={4}>Luxry Rooms</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Floor</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Select Floor">Select Floor</option>
                                <option value={1}>One Floor</option>
                                <option value={2}>Two Floor</option>
                                <option value={3}>Three Floor</option>
                                <option value={4}>Four Floor</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Bath</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Max Bath">Max Bath</option>
                                <option value={1}>Max Bath</option>
                                <option value={2}>Max Bath</option>
                                <option value={3}>Max Bath</option>
                                <option value={4}>Max Bath</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 column">
                          <div className="form-group">
                            <label>Agencies</label>
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Any Agency">Any Agency</option>
                                <option value={1}>Any Agency</option>
                                <option value={2}>Agency 01</option>
                                <option value={3}>Agency 02</option>
                                <option value={4}>Agency 03</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="range-box">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <div className="price-range">
                              <h6>Select Price Range</h6>
                              <div className="range-input">
                                <div className="input"><input type="text" className="property-amount" name="field-name" readOnly /></div>
                              </div>
                              <div className="price-range-slider" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <div className="area-range">
                              <h6>Select Area</h6>
                              <div className="range-input">
                                <div className="input"><input type="text" className="area-range" name="field-name" readOnly /></div>
                              </div>
                              <div className="area-range-slider" />
                            </div>
                          </div>
                        </div>
                      </div>
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
      {/* banner-section end */}
      

  {/* category-section */}
  <section className="category-section centred">
    <div className="auto-container">
      <div className="inner-container wow slideInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
        <ul className="category-list clearfix">
          <li>
            <div className="category-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-1" /></div>
                <h5><a href="property-details.html">Residential</a></h5>
                <span>52</span>
              </div>
            </div>
          </li>
          <li>
            <div className="category-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-2" /></div>
                <h5><a href="property-details.html">Commercial</a></h5>
                <span>20</span>
              </div>
            </div>
          </li>
          <li>
            <div className="category-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-3" /></div>
                <h5><a href="property-details.html">Appertment</a></h5>
                <span>35</span>
              </div>
            </div>
          </li>
          <li>
            <div className="category-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-4" /></div>
                <h5><a href="property-details.html">Industrial</a></h5>
                <span>10</span>
              </div>
            </div>
          </li>
          <li>
            <div className="category-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-5" /></div>
                <h5><a href="property-details.html">Building Code</a></h5>
                <span>27</span>
              </div>
            </div>
          </li>
        </ul>
        <div className="more-btn"><a href="categories.html" className="theme-btn btn-one">All Categories</a></div>
      </div>
    </div>
  </section>
      {/* category-section end */}
      

  {/* feature-section */}
  <section className="feature-section sec-pad bg-color-1">
    <div className="auto-container">
      <div className="sec-title centred">
        <h5>Features</h5>
        <h2>Featured Property</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt <br />labore dolore magna aliqua enim.</p>
      </div>
      <div className="row clearfix">
{
      property.map(xyz =>
        <div className="col-lg-4 col-md-6 col-sm-12 feature-block my-3">
          <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src={xyz.property_thambnail} alt /></figure>
                <div className="batch"><i className="icon-11" /></div>
                <span className="category">Featured</span>
              </div>
              <div className="lower-content">
                <div className="author-info clearfix">
                  <div className="author pull-left">
                    <figure className="author-thumb"><img src="assets/images/feature/author-1.jpg" alt /></figure>
                    <h6>Michael Bean</h6>
                  </div>
                  <div className="buy-btn pull-right"><a href="property-details.html">{xyz.property_status}</a></div>
                </div>
                <div className="title-text"><h4><a href="property-details.html">{xyz.property_name}</a></h4></div>
                <div className="price-box clearfix">
                  <div className="price-info pull-left">
                    <h6>Start From</h6>
                    <h4>{xyz.lowest_price}</h4>
                  </div>
                  <ul className="other-option pull-right clearfix">
                    <li><a href="property-details.html"><i className="icon-12" /></a></li>
                    <li><a href="property-details.html"><i className="icon-13" /></a></li>
                  </ul>
                </div>
                <p>{xyz.long_descp}</p>
                <ul className="more-details clearfix">
                  <li><i className="icon-14" />{xyz.bedrooms} Beds</li>
                  <li><i className="icon-15" />{xyz.bathrooms} Baths</li>
                  <li><i className="icon-16" />{xyz.garage_size} Sq Ft</li>
                </ul>
                <div className="btn-box"><a href="property-details.html" className="theme-btn btn-two">See Details</a></div>
              </div>
            </div>
          </div>
        </div>
  )              
}
      </div>
      <div className="more-btn centred"><a href="property-list.html" className="theme-btn btn-one">View All Listing</a></div>
    </div>
  </section>
      {/* feature-section end */}
      

  {/* video-section */}
  <section className="video-section centred" style={{backgroundImage: 'url(assets/images/background/video-1.jpg)'}}>
    <div className="auto-container">
      <div className="video-inner">
        <div className="video-btn">
          <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption><i className="icon-17" /></a>
        </div>
      </div>
    </div>
  </section>
  {/* video-section end */}
      {/* deals-section */}
      

  <section className="deals-section sec-pad">
    <div className="auto-container">
      <div className="sec-title">
        <h5>Hot Property</h5>
        <h2>Our Best Deals</h2>
      </div>
      <div className="row clearfix">
        {
              hot.map(hot =>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src={hot.property_thambnail} alt /></figure>
                <div className="batch"><i className="icon-11" /></div>
                <span className="category">Hot Deal</span>
              </div>
              <div className="lower-content">
                <div className="author-info clearfix">
                  <div className="author pull-left">
                            <figure className="author-thumb"><img src={hot.property_status} alt /></figure>
                    <h6>Michael Bean</h6>
                  </div>
                  <div className="buy-btn pull-right"><a href="property-details.html">{hot.property_status}</a></div>
                </div>
                <div className="title-text"><h4><a href="property-details.html">{hot.property_name}</a></h4></div>
                <div className="price-box clearfix">
                  <div className="price-info pull-left">
                    <h6>Start From</h6>
                    <h4>{hot.lowest_price}</h4>
                  </div>
                  <ul className="other-option pull-right clearfix">
                    <li><a href="property-details.html"><i className="icon-12" /></a></li>
                    <li><a href="property-details.html"><i className="icon-13" /></a></li>
                  </ul>
                </div>
                <ul className="more-details clearfix">
                  <li><i className="icon-14" />{hot.bedrooms} Beds</li>
                  <li><i className="icon-15" />{hot.bathrooms} Baths</li>
                  <li><i className="icon-16" />{hot.garage_size} Sq Ft</li>
                </ul>
                <div className="btn-box"><a href="property-details.html" className="theme-btn btn-two">See Details</a></div>
              </div>
            </div>
          </div>
        </div>
                )      
        }
      </div>
    </div>
  </section>
      {/* deals-section end */}
      

  {/* testimonial-section end */}
  <section className="testimonial-section bg-color-1 centred">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}} />
    <div className="auto-container">
      <div className="sec-title">
        <h5>Testimonials</h5>
        <h2>What They Say About Us</h2>
      </div>
      <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
        <div className="testimonial-block-one">
          <div className="inner-box">
            <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.jpg" alt /></figure>
            <div className="text">
              <p>Our goal each day is to ensure that our residents’ needs are not only met but exceeded. To make that happen we are committed to provid ing an environment in which residents can enjoy.</p>
            </div>
            <div className="author-info">
              <h4>Rebeka Dawson</h4>
              <span className="designation">Instructor</span>
            </div>
          </div>
        </div>
        <div className="testimonial-block-one">
          <div className="inner-box">
            <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.jpg" alt /></figure>
            <div className="text">
              <p>Our goal each day is to ensure that our residents’ needs are not only met but exceeded. To make that happen we are committed to provid ing an environment in which residents can enjoy.</p>
            </div>
            <div className="author-info">
              <h4>Marc Kenneth</h4>
              <span className="designation">Founder CEO</span>
            </div>
          </div>
        </div>
        <div className="testimonial-block-one">
          <div className="inner-box">
            <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.jpg" alt /></figure>
            <div className="text">
              <p>Our goal each day is to ensure that our residents’ needs are not only met but exceeded. To make that happen we are committed to provid ing an environment in which residents can enjoy.</p>
            </div>
            <div className="author-info">
              <h4>Owen Lester</h4>
              <span className="designation">Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      {/* testimonial-section end */}
      

  {/* chooseus-section */}
  <section className="chooseus-section">
    <div className="auto-container">
      <div className="inner-container bg-color-2">
        <div className="upper-box clearfix">
          <div className="sec-title light">
            <h5>Why Choose Us?</h5>
            <h2>Reasons To Choose Us</h2>
          </div>
          <div className="btn-box">
            <a href="categories.html" className="theme-btn btn-one">All Categories</a>
          </div>
        </div>
        <div className="lower-box">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-19" /></div>
                  <h4>Excellent Reputation</h4>
                  <p>Lorem ipsum dolor sit consectetur sed eiusm tempor.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-26" /></div>
                  <h4>Best Local Agents</h4>
                  <p>Lorem ipsum dolor sit consectetur sed eiusm tempor.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-21" /></div>
                  <h4>Personalized Service</h4>
                  <p>Lorem ipsum dolor sit consectetur sed eiusm tempor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      {/* chooseus-section end */}
      
  {/* place-section */}
  <section className="place-section sec-pad">
    <div className="auto-container">
      <div className="sec-title centred">
        <h5>Top Places</h5>
        <h2>Most Popular Places</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt <br />labore dolore magna aliqua enim.</p>
      </div>
      <div className="sortable-masonry">
        <div className="items-container row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all illustration brand marketing software">
            <div className="place-block-one">
              <div className="inner-box">
                <figure className="image-box"><img src="assets/images/resource/place-1.jpg" alt /></figure>
                <div className="text">
                  <h4><a href="categories.html">Los Angeles</a></h4>
                  <p>10 Properties</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all brand illustration print software logo">
            <div className="place-block-one">
              <div className="inner-box">
                <figure className="image-box"><img src="assets/images/resource/place-2.jpg" alt /></figure>
                <div className="text">
                  <h4><a href="categories.html">San Francisco</a></h4>
                  <p>08 Properties</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all illustration marketing logo">
            <div className="place-block-one">
              <div className="inner-box">
                <figure className="image-box"><img src="assets/images/resource/place-3.jpg" alt /></figure>
                <div className="text">
                  <h4><a href="categories.html">Las Vegas</a></h4>
                  <p>29 Properties</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 masonry-item small-column all brand marketing print software">
            <div className="place-block-one">
              <div className="inner-box">
                <figure className="image-box"><img src="assets/images/resource/place-4.jpg" alt /></figure>
                <div className="text">
                  <h4><a href="categories.html">New York City</a></h4>
                  <p>05 Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      {/* place-section end */}
      
  {/* team-section */}
  <section className="team-section sec-pad centred bg-color-1">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}} />
    <div className="auto-container">
      <div className="sec-title">
        <h5>Our Agents</h5>
        <h2>Meet Our Excellent Agents</h2>
      </div>
      <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
        <div className="team-block-one">
          <div className="inner-box">
            <figure className="image-box"><img src="assets/images/team/team-1.jpg" alt /></figure>
            <div className="lower-content">
              <div className="inner">
                <h4><a href="agents-details.html">Merrie Lewis</a></h4>
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
        <div className="team-block-one">
          <div className="inner-box">
            <figure className="image-box"><img src="assets/images/team/team-2.jpg" alt /></figure>
            <div className="lower-content">
              <div className="inner">
                <h4><a href="agents-details.html">Parks Missie</a></h4>
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
        <div className="team-block-one">
          <div className="inner-box">
            <figure className="image-box"><img src="assets/images/team/team-3.jpg" alt /></figure>
            <div className="lower-content">
              <div className="inner">
                <h4><a href="agents-details.html">Mariana Buenos</a></h4>
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
        <div className="team-block-one">
          <div className="inner-box">
            <figure className="image-box"><img src="assets/images/team/team-4.jpg" alt /></figure>
            <div className="lower-content">
              <div className="inner">
                <h4><a href="agents-details.html">Stephen Fowler</a></h4>
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
        <div className="team-block-one">
          <div className="inner-box">
            <figure className="image-box"><img src="assets/images/team/team-5.jpg" alt /></figure>
            <div className="lower-content">
              <div className="inner">
                <h4><a href="agents-details.html">Daisy Phillips</a></h4>
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
  </section>
      {/* team-section end */}
      
  {/* cta-section */}
  <section className="cta-section bg-color-2">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-2.png)'}} />
    <div className="auto-container">
      <div className="inner-box clearfix">
        <div className="text pull-left">
          <h2>Looking to Buy a New Property or <br />Sell an Existing One?</h2>
        </div>
        <div className="btn-box pull-right">
          <a href="property-details.html" className="theme-btn btn-three">Rent Properties</a>
          <a href="index.html" className="theme-btn btn-one">Buy Properties</a>
        </div>
      </div>
    </div>
  </section>
      {/* cta-section end */}
      
  {/* news-section */}
  <section className="news-section sec-pad">
    <div className="auto-container">
      <div className="sec-title centred">
        <h5>News &amp; Article</h5>
        <h2>Stay Update With Realshed</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt <br />labore dolore magna aliqua enim.</p>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
          <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><a href="blog-details.html"><img src="assets/images/news/news-1.jpg" alt /></a></figure>
                <span className="category">Featured</span>
              </div>
              <div className="lower-content">
                <h4><a href="blog-details.html">Including Animation In Your Design System</a></h4>
                <ul className="post-info clearfix">
                  <li className="author-box">
                    <figure className="author-thumb"><img src="assets/images/news/author-1.jpg" alt /></figure>
                    <h5><a href="blog-details.html">Eva Green</a></h5>
                  </li>
                  <li>April 10, 2020</li>
                </ul>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing sed.</p>
                </div>
                <div className="btn-box">
                  <a href="blog-details.html" className="theme-btn btn-two">See Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
          <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><a href="blog-details.html"><img src="assets/images/news/news-2.jpg" alt /></a></figure>
                <span className="category">Featured</span>
              </div>
              <div className="lower-content">
                <h4><a href="blog-details.html">Taking The Pattern Library To The Next Level</a></h4>
                <ul className="post-info clearfix">
                  <li className="author-box">
                    <figure className="author-thumb"><img src="assets/images/news/author-2.jpg" alt /></figure>
                    <h5><a href="blog-details.html">George Clooney</a></h5>
                  </li>
                  <li>April 09, 2020</li>
                </ul>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing sed.</p>
                </div>
                <div className="btn-box">
                  <a href="blog-details.html" className="theme-btn btn-two">See Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
          <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><a href="blog-details.html"><img src="assets/images/news/news-3.jpg" alt /></a></figure>
                <span className="category">Featured</span>
              </div>
              <div className="lower-content">
                <h4><a href="blog-details.html">How New Font Technologies Will Improve The Web</a></h4>
                <ul className="post-info clearfix">
                  <li className="author-box">
                    <figure className="author-thumb"><img src="assets/images/news/author-3.jpg" alt /></figure>
                    <h5><a href="blog-details.html">Simon Baker</a></h5>
                  </li>
                  <li>April 28, 2020</li>
                </ul>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing sed.</p>
                </div>
                <div className="btn-box">
                  <a href="blog-details.html" className="theme-btn btn-two">See Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      {/* news-section end */}
      
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
  <Footer />
  {/* main-footer end */}
  {/*Scroll to top*/}
  <button className="scroll-top scroll-to-target" data-target="html">
    <span className="fal fa-angle-up" />
  </button>
</div>


  )
}

export default Home