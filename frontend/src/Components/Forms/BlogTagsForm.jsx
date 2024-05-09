import React, { useState } from 'react'

const BlogTagsForm = ({}) => {
    const [tags, setTags] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            tags
        }
        const url = 'http://127.0.0.1:5000/create_tag'
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
            <label htmlFor='tags'>Category:</label>
            <input type = "text" id = "tags" value = {tags} onChange={(e)=>setTags(e.target.value)}/>
        </div>
        <button type="submit">Create Tags</button>
    </form>
  )
}

export default BlogTagsForm