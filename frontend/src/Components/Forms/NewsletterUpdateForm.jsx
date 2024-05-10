// Import edilecek kütüphaneler
import React, { useState } from 'react'

// NewsletterUpdateForm bileşeni
const NewsletterUpdateForm = ({ id, onClose }) => {
    const [email, setEmail] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email
        }
        const url = `http://127.0.0.1:5000/update_newsletter/${id}`;
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
            // Başarılı
            onClose(); // Formu kapat
            window.location.reload(); // Sayfayı yenile
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit">Update Newsletter</button>
        </form>
    )
}

export default NewsletterUpdateForm;
