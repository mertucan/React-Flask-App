import React, { useState, useEffect } from 'react';
import '../Pages/Login/Login.css'

const MessagesUpdateForm = ({ message, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [messageText, setMessageText] = useState("");
    const [subject, setSubject] = useState("");
  
    useEffect(() => {
      if (message) {
        setName(message.name);
        setEmail(message.email);
        setPhone(message.phone);
        setMessageText(message.message);
        setSubject(message.subject)
      }
    }, [message]);
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      const data = {
        name,
        email,
        phone,
        message: messageText,
        subject
      }
  
      const url = `http://127.0.0.1:5000/update_message/${message.id}`;
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
              <label htmlFor='email' className="form-label">Email:</label>
              <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor='phone' className="form-label">Phone:</label>
              <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <label htmlFor='message' className="form-label">Message:</label>
              <input type="text" className="form-control" id="message" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
            </div>
            <div>
              <label htmlFor='subject' className="form-label">Subject:</label>
              <input type="text" className="form-control" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <br></br>
            <button type="submit">Update Message</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default MessagesUpdateForm;
  