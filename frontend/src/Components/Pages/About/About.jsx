import React from 'react';
import '../About/About.css';

const About = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <p className="text-blk heading">
          About Us
        </p>
        <p className="text-blk subHeading">
          At Mediplus Hospital, we are dedicated to your well-being. As a leading healthcare provider, our mission is to deliver high-quality services, combining expertise, compassion, and advanced technology. With a patient-centered approach, we prioritize your health needs, ensuring a positive and caring experience. Choose Mediplus Hospital for excellence in healthcare.
        </p>
        <div className="social-icons-container">
          <a className="social-icon" href="https://www.facebook.com">
            <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png" alt="Facebook" />
          </a>
          <a className="social-icon" href="https://www.linkedin.com">
            <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png" alt="LinkedIn" />
          </a>
          <a className="social-icon" href="https://www.instagram.com">
            <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png" alt="Instagram" />
          </a>
          <a className="social-icon" href="https://twitter.com">
            <img className="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
