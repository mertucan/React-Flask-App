import React from 'react';

const Features = () => {
  return (
    <section className="Feautes section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Are Always Ready to Help You & Your Family</h2>
              {/* Resim yolunu güncelledim */}
              <img src="/public/img/section-img.png" alt="Hospital Image"/>
              <p>At our hospital, we're here for you and your family, ready to provide prompt and compassionate care. Trust us as your healthcare partner for reliable and personalized services. Your well-being is our priority, ensuring a happy and healthy life for you and your loved ones.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12">
            {/* Start Single features */}
            <div className="single-features">
              <div className="signle-icon">
                <i className="icofont icofont-ambulance-cross"></i>
              </div>
              <h3>Emergency Help</h3>
              <p>Immediate assistance when you need it most. Your emergency care partner, always here to help.</p>
            </div>
            {/* End Single features */}
          </div>
          <div className="col-lg-4 col-12">
            {/* Start Single features */}
            <div className="single-features">
              <div className="signle-icon">
                <i className="icofont icofont-medical-sign-alt"></i>
              </div>
              <h3>Enriched Pharmecy</h3>
              <p>Elevate your health with our enriched pharmacy. Quality care, personalized for you.</p>
            </div>
            {/* End Single features */}
          </div>
          <div className="col-lg-4 col-12">
            {/* Start Single features */}
            <div className="single-features last">
              <div className="signle-icon">
                <i className="icofont icofont-stethoscope"></i>
              </div>
              <h3>Medical Treatment</h3>
              <p>Precision medical treatment tailored to you. Your well-being, our priority.</p>
            </div>
            {/* End Single features */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
