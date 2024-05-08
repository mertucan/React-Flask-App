import React from 'react';
import HeadContent from '../HeadContent/HeadContent';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 tane göster
    slidesToScroll: 1
  };

  return (
    <>
      <HeadContent />
        {/* Start Portfolio Details Area */}
        <section className="pf-details section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="inner-content">
                  <Slider {...settings}>
                    <div className="pf-details-slider">
                      <img src="/img/call-bg.jpg" alt="#" />
                    </div>
                    <div className="pf-details-slider">
                      <img src="/img/call-bg.jpg" alt="#" />
                    </div>
                    <div className="pf-details-slider">
                      <img src="/img/video-bg.jpg" alt="#" />
                    </div>
                  </Slider>
                  <div className="date">
                    <ul>
                      <li><span>Category :</span> Heart Surgery</li>
                      <li><span>Date :</span> April 20, 2019</li>
                      <li><span>Client :</span> Suke Agency</li>
                      <li><span>Ags :</span> Typo</li>
                    </ul>
                  </div>
                  <div className="body-text">
                  <h3>Patient Information System Updates</h3>
                    <p>Modernizing patient information systems, particularly Electronic Health Records (EHR) systems, is a strategic imperative in healthcare. The goal is to contemporize these systems by incorporating the latest technologies, enhancing their overall functionality and efficiency.</p>
                    <p>This comprehensive overhaul not only addresses current technological needs but also focuses on refining core functionality and user experience. The objective is to create a sophisticated, user-friendly environment that empowers healthcare professionals for streamlined management of medical records.</p>
                    <p>Beyond technological upgrades, the aim is to establish adaptable and scalable foundations. Future-proofing these systems against technological evolution is crucial, anticipating and accommodating the requirements of tomorrow's healthcare landscape.</p>
                    <p>The significance of this modernization effort becomes evident in facilitating faster and secure sharing of patient data among different healthcare entities. Updated Electronic Health Records (EHR) systems are instrumental for timely decision-making and collaborative care.</p>
                    <p>In essence, modernizing patient information systems directly influences the quality of patient care, providing healthcare professionals with a robust platform. Staying abreast of technological advancements enhances the efficiency of healthcare services and improves the overall quality of patient care.</p>
                  </div>
                  <div className="body-text">
                    <h3>Robotic Surgery and Technology Integration</h3>
                    <p>Integrating robotic surgical systems into hospitals enhances precision and effectiveness in surgical interventions. Beyond robotic surgery, thoughtful consideration should be given to integrating other complementary medical technologies.</p>
                    <p>Robotic systems bring advanced precision and control, allowing surgeons to perform intricate procedures with minimized invasiveness and improved recovery times. However, the integration extends to creating a cohesive ecosystem, incorporating various technologies to provide comprehensive and advanced healthcare solutions.</p>
                    <p>The synergy of robotic surgery with cutting-edge technologies, such as imaging and data analytics, amplifies the overall effectiveness of medical interventions. This collaborative integration ensures a holistic approach to patient care, reinforcing the hospital's commitment to staying at the forefront of healthcare excellence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Details Area */}
    </>
  );
}

export default Portfolio;
