import * as React from 'react';

class Header extends React.Component {
  render() {
    return (
<div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div className="container">
      <div className="navbar-header">
        {/*} 
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar">f</span>
              <span className="icon-bar">g</span>
          </button>
    */}
          <a className="navbar-brand" href="index.html">
            Bitcoinforks.io</a>
      </div>
    {/*
      <div className="navbar-collapse collapse">

          <ul className="nav navbar-nav navbar-right">
              <li className="active dropdown">
                  <a href="#" className="dropdown-toggle js-activated" data-toggle="dropdown">H
                    ome <i className="ion-ios7-arrow-down">f</i></a>
                  <ul className="dropdown-menu">
                      <li><a href="index.html">Home-default</a></li>
                      <li><a href="home-portfolio.html">Home - Portfolio</a></li>
                      <li><a href="home-blog.html">Home - Blog</a></li>
                      <li><a href="home-all.html">Home - All</a></li>
                  </ul>
              </li>
              <li className="dropdown">
                  <a href="#" className="dropdown-toggle js-activated" data-toggle="dropdown">Portfolio 
                    <i className="ion-ios7-arrow-down">f</i></a>
                  <ul className="dropdown-menu">
                      <li><a href="portfolio-2col.html">Portfolio 2 Columns</a></li>
                      <li><a href="portfolio-3col.html">Portfolio 3 Columns</a></li>
                      <li><a href="portfolio-fullwidth.html">Portfolio - full width</a></li>
                      <li><a href="portfolio-single.html">Portfolio Single</a></li>
                  </ul>
              </li>
              <li className=" dropdown">
                  <a href="#" className="dropdown-toggle js-activated" data-toggle="dropdown">Blog 
                    <i className="ion-ios7-arrow-down">f</i></a>
                  <ul className="dropdown-menu">
                      <li><a href="blog-grid.html">Blog Grid</a></li>
                      <li><a href="blog-full.html">Blog Full width</a></li>
                      <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                      <li><a href="blog-filter.html">Blog filter</a></li>
                      <li><a href="blog-post.html">Blog Post</a></li>
                  </ul>
              </li>
              <li className="dropdown">
                  <a href="#" className="dropdown-toggle js-activated" data-toggle="dropdown">Features
                    <i className="ion-ios7-arrow-down">b</i></a>
                  <ul className="dropdown-menu">
                      <li><a href="typography.html">Typography</a></li>
                      <li><a href="shortcodes.html">Shortcodes</a></li>                              
                      <li><a href="header-2.html">Header 2</a></li>
                      <li><a href="footer-2.html">Footer 2</a></li>
                      <li><a href="pricing.html">Pricing Tables</a></li>
                  </ul>
              </li>
              <li className=" dropdown">
                  <a href="#" className="dropdown-toggle js-activated" data-toggle="dropdown">Pages
                    <i className="ion-ios7-arrow-down">v</i></a>
                  <ul className="dropdown-menu">
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                      <li><a href="contact-2.html">Contact option</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="our-team.html">Our Team</a></li>
                      <li><a href="about-me.html">About Me</a></li>
                      <li><a href="gallery.html">Gallery</a></li>
                      <li><a href="page-fullwidth.html">Full Width</a></li>
                      <li><a href="page-leftbar.html">Left Sidebar</a></li>
                      <li><a href="page-rightbar.html">Right Sidebar</a></li>
                      <li><a href="faqs.html">Faqs</a></li>
                      <li><a href="page-error.html">Error 404</a></li>
                  </ul>
              </li>
          </ul>
    </div>*/}
  </div>
</div>);
  }
}

export default Header;
