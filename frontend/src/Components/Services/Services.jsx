import React from 'react';

const Services = () => {
  return (
    <section className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Offer Different Services To Improve Your Health</h2>
              <img src="/img/section-img.png" alt="#" />
              <p>Diverse services, one goal: your better health.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-service">
              <i className="icofont icofont-prescription"></i>
              <h4><a href="service-details.html">General Treatment</a></h4>
              <p>Comprehensive care for your overall well-being. Your health, our focus.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-service">
              <i className="icofont icofont-tooth"></i>
              <h4><a href="service-details.html">Teeth Whitening</a></h4>
              <p>Illuminate your smile with our professional teeth whitening. Brighten your confidence, brighten your life.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-service">
              <i className="icofont icofont-heart-alt"></i>
              <h4><a href="service-details.html">Heart Surgery</a></h4>
              <p>Expert care for a healthier heart. Trust us for precision in heart surgery, your well-being is our priority.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-service">
              <i className="icofont icofont-listening"></i>
              <h4><a href="service-details.html">Ear Treatment</a></h4>
              <p>Precision care for your ears. Explore effective ear treatments with us, because your hearing matters.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-service">
              <i className="icofont icofont-eye-alt"></i>
              <h4><a href="service-details.html">Vision Problems</a></h4>
              <p>Clarity begins here. Discover tailored solutions for your vision problems, ensuring a clearer tomorrow.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-service">
              <i className="icofont icofont-blood"></i>
              <h4><a href="service-details.html">Blood Transfusion</a></h4>
              <p>Lifesaving support when you need it. Secure and compassionate blood transfusions for your well-being.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
