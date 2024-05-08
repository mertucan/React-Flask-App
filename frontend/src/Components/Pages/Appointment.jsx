import React, { useState } from 'react';
import HeadContent from '../HeadContent/HeadContent';
import {useDoctors, useDepartments} from '../../Hooks';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Appointment = () => {
  const [doctorData, doctorError] = useDoctors();
  const [departmentData, departmentError] = useDepartments();
  const [selectedDate, setSelectedDate] = useState(null);

  if(doctorError || departmentError) return <p>{doctorError.message || departmentError.message}</p>;
  if(!doctorData || !departmentData) return null;
  return (
    <>
      <HeadContent />
      <section className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                <img src="/img/section-img.png" alt="#" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <form action="/contact" method="post" className="form">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="name" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="phone" type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="nice-select form-control wide" tabIndex="0">
                        <span className="current">Department</span>
                        <ul className="list">
                          {departmentData.departments.map((department) => (
                            <option key={department.department} value={department.department}>
                              {department.department}
                            </option>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="nice-select form-control wide" tabIndex="0">
                        <span className="current">Doctors</span>
                        <ul className="list">
                          {doctorData.doctors.map((doctor) => (
                            <option key={doctor.username} value={doctor.username}>
                              {doctor.username}
                            </option>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        placeholderText="Date"
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        id="datepicker"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea name="message" placeholder="Write Your Message Here....."></textarea>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-4 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn">Book An Appointment</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Appointment;
