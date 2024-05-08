import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>About Us</h2>
                <p>Mediplus Hospital: Your Health, Our Priority.</p>
                {/* Social */}
                <ul className="social">
                  <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="icofont-facebook"></i></a></li>
                  <li><a href="https://plus.google.com/" target="_blank" rel="noopener noreferrer"><i className="icofont-google-plus"></i></a></li>
                  <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="icofont-twitter"></i></a></li>
                  <li><a href="https://vimeo.com/" target="_blank" rel="noopener noreferrer"><i className="icofont-vimeo"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><i className="icofont-pinterest"></i></a></li>
                </ul>
                {/* End Social */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h2>Quick Links</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <ul>
                      <li><a href="/"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
                      <li><a href="/about"><i className="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
                      <li><a href="/services"><i className="fa fa-caret-right" aria-hidden="true"></i>Services</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <ul>
                      <li><a href="/contact"><i className="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>
                      <li><a href="/blogs"><i className="fa fa-caret-right" aria-hidden="true"></i>Blogs</a></li>
                      <li><a href="/learn"><i className="fa fa-caret-right" aria-hidden="true"></i>Learn More</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Open Hours</h2>
                <p>Visit us during our convenient hours for quality healthcare at your convenience.</p>
                <ul className="time-sidual">
                  <li className="day">Monday - Friday <span>8.00-20.00</span></li>
                  <li className="day">Saturday <span>9.00-18.30</span></li>
                  <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Newsletter</h2>
                <p>Subscribe to our newsletter to get all our news in your inbox.</p>
                <form action="/add_email_to_newsletter" method="post" className="newsletter-inner">
                  <input name="email" placeholder="Email Address" className="common-input" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Your email address'} required type="email" />
                  <button className="button" type="submit"><i className="icofont icofont-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Footer Top */}
    </>
  );
}

export default Footer;
