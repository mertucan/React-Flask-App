import React, { useState } from 'react'

const DepartmentForm = ({}) => {
    const [department, setDepartment] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            department
        }
        const url = 'http://127.0.0.1:5000/create_department'
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
            <label htmlFor='department'>Department:</label>
            <input type = "text" id = "department" value = {department} onChange={(e)=>setDepartment(e.target.value)}/>
        </div>
        <button type="submit">Create Department</button>
    </form>
  )
}

export default DepartmentForm