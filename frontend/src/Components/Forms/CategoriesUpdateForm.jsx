import React, { useState, useEffect } from 'react';

const CategoriesUpdateForm = ({ category, onClose }) => {
    const [categoryName, setCategoryName] = useState(""); // Değişiklik yapıldı

    useEffect(() => {
        if (category) {
            setCategoryName(category.categories);
        }
    }, [category]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            categories: categoryName // Değişiklik yapıldı
        }
        const url = `http://127.0.0.1:5000/update_category/${category.id}`;
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
                        <label htmlFor='category'>Category:</label>
                        <input type="text" id="category" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} /> {/* Değişiklik yapıldı */}
                    </div>
                    <button type="submit">Update Category</button>
                </form>
            </div>
        </div>
    );
};


export default CategoriesUpdateForm;
