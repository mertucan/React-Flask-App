import React, { useState } from 'react'

const CategoriesForm = ({}) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email,
            message,
            name,
            phone,
            subject
        }
        const url = 'http://127.0.0.1:5000/create_message'
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
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor='email'>Email:</label>
            <input type = "text" id = "email" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='message'>Message:</label>
            <input type = "text" id = "message" value = {message} onChange={(e)=>setMessage(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type = "text" id = "name" value = {name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='phone'>Phone:</label>
            <input type = "text" id = "phone" value = {phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='subject'>Subject:</label>
            <input type = "text" id = "subject" value = {subject} onChange={(e)=>setSubject(e.target.value)}/>
        </div>
        <button type="submit">Create Message</button>
    </form>
  )
}

export default CategoriesForm