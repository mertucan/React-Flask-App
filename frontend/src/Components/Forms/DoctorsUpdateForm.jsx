import React, { useState, useEffect } from 'react';
import '../Pages/Login/Login.css'

const DoctorsUpdateForm = ({ doctor, onClose }) => {
    const [username, setUsername] = useState("");
  
    useEffect(() => {
      if (doctor) {
        setUsername(doctor.username);
      }
    }, [doctor]);
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      const data = {
        username
      }
  
      const url = `http://127.0.0.1:5000/update_doctor/${doctor.id}`;
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
              <label htmlFor='username' className="form-label">Username:</label>
              <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div> 
            <br></br>
            <button type="submit">Update Doctor</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default DoctorsUpdateForm;
  