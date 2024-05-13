import React, { useState, useEffect } from 'react';
import '../Pages/Login/Login.css'

const AppointmentUpdateForm = ({ appointment, onClose }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [doctor_name, setDoctor] = useState("");
    const [date, setDate] = useState("");
  
    useEffect(() => {
      if (appointment) {
        setName(appointment.name);
        setPhone(appointment.phone);
        setEmail(appointment.email);
        setMessage(appointment.message);
        setDoctor(appointment.doctor_name);
        setDate(appointment.date);
      }
    }, [appointment]);
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      const data = {
        name,
        phone,
        email,
        message,
        doctor_name,
        date
      }
  
      const url = `http://127.0.0.1:5000/update_appointment/${appointment.id}`;
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
  
      const response = await fetch(url, options)
  
      if (response.status !== 200) {
        const data = await response.json()
        alert(data.message)
      } else {
        onClose(); // Formu kapat
        window.location.reload(); // Sayfayı yenile
      }
    }
  
    const closeModal = () => {
      onClose(); // Modalı kapat
    };
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor='name' className="form-label">Name:</label>
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor='phone' className="form-label">Phone:</label>
              <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <label htmlFor='email' className="form-label">Email:</label>
              <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor='message' className="form-label">Message:</label>
              <input type="text" className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div>
              <label htmlFor='doctor_name' className="form-label">Doctor:</label>
              <input type="text" className="form-control" id="doctor_name" value={doctor_name} onChange={(e) => setDoctor(e.target.value)} />
            </div>    
            <div>
              <label htmlFor='date' className="form-label">Date:</label>
              <input type="text" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>    
            <br></br>
            <button type="submit">Update Appointment</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default AppointmentUpdateForm;
  