import { Link } from '@inertiajs/react'
import React from 'react'

const Header = () => {
  return (
    <header className="main-header">
  {/* header-top */}
  <div className="header-top">
    <div className="top-inner clearfix">
      <div className="left-column pull-left">
        <ul className="info clearfix">
          <li><i className="far fa-map-marker-alt" />Discover St, New York, NY 10012, USA</li>
          <li><i className="far fa-clock" />Mon - Sat  9.00 - 18.00</li>
          <li><i className="far fa-phone" /><a href="tel:2512353256">+251-235-3256</a></li>
        </ul>
      </div>
      <div className="right-column pull-right">
        <ul className="social-links clearfix">
          <li><a href="index.html"><i className="fab fa-facebook-f" /></a></li>
          <li><a href="index.html"><i className="fab fa-twitter" /></a></li>
          <li><a href="index.html"><i className="fab fa-pinterest-p" /></a></li>
          <li><a href="index.html"><i className="fab fa-google-plus-g" /></a></li>
          <li><a href="index.html"><i className="fab fa-vimeo-v" /></a></li>
        </ul>
        @auth
        <div className="sign-box">
          <a href="{{ route('dashboard') }}"><i className="fas fa-user" />Dashboard</a>
          <a href="{{ route('user.logout') }}"><i className="fas fa-user" />Logout</a>
        </div> 
        @else 
        <div className="sign-box">
          <a href="{{ route('login') }}"><i className="fas fa-user" />Sign In</a>
        </div>
        @endauth    
      </div>
    </div>
  </div>
  {/* header-lower */}
  <div className="header-lower">
    <div className="outer-box">
      <div className="main-box">
        <div className="logo-box">
          <figure className="logo"><a href="{{ url('/') }}"><img src="{{ asset('frontend/assets/images/logo.png') }}" alt /></a></figure>
        </div>
        <div className="menu-area clearfix">
          {/*Mobile Navigation Toggler*/}
          <div className="mobile-nav-toggler">
            <i className="icon-bar" />
            <i className="icon-bar" />
            <i className="icon-bar" />
          </div>
          <nav className="main-menu navbar-expand-md navbar-light">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li><Link href="/"><span>Home</span></Link> </li>
                <li><Link href='/about'><span>About Us </span></Link> </li>
                <li className="dropdown"><a href="#"><span>Property</span></a>
                  <ul>
                    <li><Link href="">Rent Property</Link></li>
                    <li><a href="{{ route('buy.property') }}">Buy Property </a></li>
                  </ul>
                </li>
                <li><a href="{{ url('/') }}"><span>Agent </span></a> </li>       
                <li><a href="{{ url('/') }}"><span>Blog</span></a> </li>
                <li><a href="contact.html"><span>Contact</span></a></li> 
                <li> 
                  <a href="{{ route('agent.login') }}" className="btn btn-success"><span>+</span>Add Listing</a> 
                </li>    
              </ul>
            </div>
          </nav>
        </div>
        <div className="btn-box">
          <a href="index.html" className="theme-btn btn-one"><span>+</span>Add Listing</a>
        </div>
      </div>
    </div>
  </div>
  {/*sticky Header*/}
  <div className="sticky-header">
    <div className="outer-box">
      <div className="main-box">
        <div className="logo-box">
          <figure className="logo"><a href="index.html"><img src="{{ asset('frontend/assets/images/logo.png') }}" alt /></a></figure>
        </div>
        <div className="menu-area clearfix">
          <nav className="main-menu clearfix">
            {/*Keep This Empty / Menu will come through Javascript*/}
          </nav>
        </div>
        <div className="btn-box">
          <a href="index.html" className="theme-btn btn-one"><span>+</span>Add Listing</a>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header