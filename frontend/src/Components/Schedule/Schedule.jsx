import React from 'react';

const Schedule = () => {
  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-inner">
          {/* Single Schedule 1 */}
          <div className="single-schedule first">
            <div className="inner">
              <div className="icon">
                <i className="fa fa-ambulance"></i>
              </div>
              <div className="single-content">
                <h4>Emergency Cases</h4>
                <p>In times of crisis, our hospital stands ready to provide top-notch emergency care services.</p>
                <a href="/learn">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>

          {/* Single Schedule 2 */}
          <div className="single-schedule middle">
            <div className="inner">
              <div className="icon">
                <i className="icofont-prescription"></i>
              </div>
              <div className="single-content">
                <h4>Doctors Timetable</h4>
                <ul className="time-sidual">
                  <li className="day">Monday - Friday <span>8.00-20.00</span></li>
                  <li className="day">Saturday <span>9.00-18.30</span></li>
                  <li className="day">Monday - Thursday <span>9.00-15.00</span></li>
                </ul>
                <a href="/learn">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>

          {/* Single Schedule 3 */}
          <div className="single-schedule last">
            <div className="inner">
              <div className="icon">
                <i className="icofont-ui-clock"></i>
              </div>
              <div className="single-content">
                <h4>Opening Hours</h4>
                <ul className="time-sidual">
                  <li className="day">Monday - Friday <span>8.00-20.00</span></li>
                  <li className="day">Saturday <span>9.00-18.30</span></li>
                  <li className="day">Monday - Thursday <span>9.00-15.00</span></li>
                </ul>
                <a href="/learn">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
