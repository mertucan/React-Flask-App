import React, { useState, useEffect } from 'react';
import '../Pages/Login/Login.css'

const UsersUpdateForm = ({ user, onClose }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
  
    useEffect(() => {
      if (user) {
        setEmail(user.email)
        setUsername(user.username);
      }
    }, [user]);
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      const data = {
        email,
        username
      }
  
      const url = `http://127.0.0.1:5000/update_user/${user.id}`;
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
              <label htmlFor='email' className="form-label">Email:</label>
              <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div> 
            <div>
              <label htmlFor='username' className="form-label">Username:</label>
              <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div> 
            <br></br>
            <button type="submit">Update User</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default UsersUpdateForm;
  