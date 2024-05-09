import React, { useState } from 'react'

const BlogsForm = ({}) => {
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
            <label htmlFor='surname'>Surname:</label>
            <input type = "text" id = "surname" value = {surname} onChange={(e)=>setSurname(e.target.value)}/>
        </div>
        <button type="submit">Create Blog</button>
    </form>
  )
}

export default BlogsForm