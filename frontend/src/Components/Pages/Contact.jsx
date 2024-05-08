import React from 'react';
import HeadContent from '../HeadContent/HeadContent';

const Contact = () => {
  return (
    <>
      <HeadContent />
      

        {/* Start Contact Us */}
        <section className="contact-us section">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-us-left">
                    {/* Start Google-map */}
                    <div id="myMap"></div>
                    {/*/End Google-map */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-us-form">
                    <h2>Contact With Us</h2>
                    <p>If you have any questions please feel free to contact with us.</p>
                    {/* Form */}
                    <form action="/add_message" method="post" className="form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="name" placeholder="Name" required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="email" name="email" placeholder="Email" required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="phone" placeholder="Phone" required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="subject" placeholder="Subject" required="" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea name="message" placeholder="Your Message" required=""></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group login-btn">
                            <button className="btn" type="submit">Send</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/*/ End Form */}
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-info">
              <div className="row">
                {/* single-info */}
                <div className="col-lg-4 col-12 ">
                  <div className="single-info">
                    <i className="icofont icofont-ui-call"></i>
                    <div className="content">
                      <h3>+(000) 1234 56789</h3>
                      <p>info@company.com</p>
                    </div>
                  </div>
                </div>
                {/*/End single-info */}
                {/* single-info */}
                <div className="col-lg-4 col-12 ">
                  <div className="single-info">
                    <i className="icofont-google-map"></i>
                    <div className="content">
                      <h3>2 Fir e Brigade Road</h3>
                      <p>Chittagonj, Lakshmipur</p>
                    </div>
                  </div>
                </div>
                {/*/End single-info */}
                {/* single-info */}
                <div className="col-lg-4 col-12 ">
                  <div className="single-info">
                    <i className="icofont icofont-wall-clock"></i>
                    <div className="content">
                      <h3>Mon - Sat: 8am - 5pm</h3>
                      <p>Sunday Closed</p>
                    </div>
                  </div>
                </div>
                {/*/End single-info */}
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Us */}
    </>
  );
}

export default Contact;
