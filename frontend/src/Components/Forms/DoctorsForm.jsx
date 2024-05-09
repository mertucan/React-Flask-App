import React, { useState } from 'react'

const DoctorsForm = ({}) => {
    const [username, setUsername] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username
        }
        const url = 'http://127.0.0.1:5000/create_doctor'
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
            <label htmlFor='username'>Username:</label>
            <input type = "text" id = "username" value = {username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <button type="submit">Create Doctor</button>
    </form>
  )
}

export default DoctorsForm