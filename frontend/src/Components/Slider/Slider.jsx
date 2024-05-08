import React from 'react';

const Slider = () => {
  return (
    <section className="slider">
      <div className="hero-slider">
        {/* Start Single Slider */}
        <div className="single-slider" style={{backgroundImage: "url('/img/slider2.jpg')"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="text">
                  <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                  <p>Trustworthy Care, Always: Our hospital takes pride in providing medical services that you can trust. With a dedicated team of experienced healthcare professionals, we ensure your well-being through reliable and compassionate care. </p>
                  <div className="button">
                    <a href="/appointment" className="btn">Get Appointment</a>
                    <a href="/learn" className="btn">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Slider */}
        {/* Start Single Slider */}
        <div className="single-slider" style={{backgroundImage: "url('/img/slider.jpg')"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="text">
                  <h1>Reliable <span>Health Solutions</span> Tailored to <span>You!</span></h1>
                  <p>Your Health, Our Commitment: At our hospital, we are committed to delivering medical services you can rely on. From routine check-ups to specialized treatments, trust us to prioritize your health with expertise and personalized attention. </p>
                  <div className="button">
                    <a href="/appointment" className="btn">Get Appointment</a>
                    <a href="/about" className="btn">About Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Slider */}
        {/* Start Single Slider */}
        <div className="single-slider" style={{backgroundImage: "url('/img/slider3.jpg')"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="text">
                  <h1>Dependable <span>Healthcare</span> You Can <span>Count On!</span></h1>
                  <p>Reliable Medical Excellence: Choose confidence in healthcare. Our hospital offers a range of medical services backed by a team of skilled professionals, ensuring you receive reliable and excellent care every step of the way. </p>
                  <div className="button">
                    <a href="/appointment" className="btn">Get Appointment</a>
                    <a href="/contact" className="btn">Contact Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Slider */}
      </div>
    </section>
  );
}

export default Slider;