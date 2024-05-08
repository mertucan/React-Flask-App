import React, { useState } from 'react'

const CategoriesForm = ({}) => {
    const [categories, setCategories] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            categories
        }
        const url = 'http://127.0.0.1:5000/create_category'
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
            
        }
    }

  return (
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor='categories'>Category:</label>
            <input type = "text" id = "categories" value = {categories} onChange={(e)=>setCategories(e.target.value)}/>
        </div>
        <button type="submit">Create Category</button>
    </form>
  )
}

export default CategoriesForm