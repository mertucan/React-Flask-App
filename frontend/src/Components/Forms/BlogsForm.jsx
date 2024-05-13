import React, { useState } from 'react'
import '../Pages/Login/Login.css'

const BlogsForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email,
            message,
            name,
            surname
        }
        const url = 'http://127.0.0.1:5000/create_blog'
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)

        if(response.status!=201 && response.status!=200){
            const data = await response.json()
            alert(data.message)
        }
        else{
            //successful
            window.location.reload();
        }
    }

  return (
    <form onSubmit={onSubmit} className="login-container">
        <div className="mb-3">
            <label htmlFor='email' className="form-label">Email:</label>
            <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
        </div>
        <div className="mb-3">
            <label htmlFor='name' className="form-label">Name:</label>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
        </div>
        <div className="mb-3">
            <label htmlFor='surname' className="form-label">Surname:</label>
            <input type="text" id="surname" value={surname} onChange={(e)=>setSurname(e.target.value)} className="form-control"/>
        </div>
        <div className="mb-3">
            <label htmlFor='message' className="form-label">Message:</label>
            <textarea type="text" id="message" value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control"/>
        </div>
        <button type="submit" className="btn-primary">Create Blog</button>
    </form>
  )
}

export default BlogsForm;