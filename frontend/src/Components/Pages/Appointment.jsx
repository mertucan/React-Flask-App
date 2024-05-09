import React, { useState } from 'react';
import HeadContent from '../HeadContent/HeadContent';
import {useDoctors, useDepartments} from '../../Hooks';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AppointmentForm from '../Forms/AppointmentForm';

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
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Appointment;
