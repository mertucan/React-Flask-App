import React, { useState } from 'react'

const AppointmentForm = ({}) => {
    const [date, setDate] = useState("");
    const [doctor_name, setDoctorName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            date,
            doctor_name,
            email,
            message,
            name,
            phone
        }
        const url = 'http://127.0.0.1:5000/create_appointment'
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
            <label htmlFor='date'>Date:</label>
            <input type = "text" id = "date" value = {date} onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='doctor_name'>Doctor Name:</label>
            <input type = "text" id = "doctor_name" value = {doctor_name} onChange={(e)=>setDoctorName(e.target.value)}/>
        </div>
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
        <button type="submit">Create Appointment</button>
    </form>
  )
}

export default AppointmentForm