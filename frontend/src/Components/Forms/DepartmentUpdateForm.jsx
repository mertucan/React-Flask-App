import React, { useState, useEffect } from 'react';

const DepartmentUpdateForm = ({ department, onClose }) => {
    const [departmentState, setDepartmentState] = useState("");

    useEffect(() => {
        if (department) {
            setDepartmentState(department.department);
        }
    }, [department]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            department: departmentState
        }

        const url = `http://127.0.0.1:5000/update_department/${department.id}`;
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
                        <label htmlFor='department'>Department:</label>
                        <input type="text" id="department" value={departmentState} onChange={(e) => setDepartmentState(e.target.value)} />
                    </div>
                    <button type="submit">Update Appointment</button>
                </form>
            </div>
        </div>
    );
};

export default DepartmentUpdateForm;
