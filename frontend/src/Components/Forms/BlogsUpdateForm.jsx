import React, { useState, useEffect } from 'react';
import '../Pages/Login/Login.css';

const BlogsUpdateForm = ({ blogs, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [surname, setSurname] = useState("");

    useEffect(() => {
      if (blogs) {
        setName(blogs.name);
        setEmail(blogs.email);
        setMessage(blogs.message);
        setSurname(blogs.surname);
      }
    }, [blogs]);
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      const data = {
        name,
        email,
        message,
        surname
      }
  
      const url = `http://127.0.0.1:5000/update_blog/${blogs.id}`;
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
              <label htmlFor='surname' className="form-label">Surname:</label>
              <input type="text" className="form-control" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
            </div> 
            <div>
              <label htmlFor='message' className="form-label">Message:</label>
              <input type="text" className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div> 
            <div>
              <label htmlFor='email' className="form-label">Email:</label>
              <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div> 
            <br></br>
            <button type="submit">Update Blog</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default BlogsUpdateForm;
  