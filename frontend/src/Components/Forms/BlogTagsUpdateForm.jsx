import React, { useState, useEffect } from 'react';
import '../Pages/Login/Login.css';

const BlogTagsUpdateForm = ({ tag, onClose }) => {
    const [tags, setTags] = useState("");

    useEffect(() => {
        if (tag) {
            setTags(tag.tags);
        }
    }, [tag]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            tags: tags // Değişiklik yapıldı
        }
        const url = `http://127.0.0.1:5000/update_blog_tags/${tag.id}`;
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
                        <label htmlFor='tags' className="form-label">Tag:</label>
                        <input type="text" className="form-control" id="tags" value={tags} onChange={(e) => setTags(e.target.value)} /> {/* Değişiklik yapıldı */}
                    </div>
                    <br></br>
                    <button type="submit">Update Tag</button>
                </form>
            </div>
        </div>
    );
};

export default BlogTagsUpdateForm;
