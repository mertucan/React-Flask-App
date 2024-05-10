import React, { useState } from 'react';
import '../Admin/Admin.css'
import { useDoctors, useDepartments, useCategories, useTags, useUsers, useBlogs, useAppointments, useMessages, useNewsletter } from '../../../Hooks';
import CategoriesForm from '../../Forms/CategoriesForm';
import NewsletterForm from '../../Forms/NewsletterForm';
import DepartmentForm from '../../Forms/DepartmentForm';
import DoctorsForm from '../../Forms/DoctorsForm';
import BlogTagsForm from '../../Forms/BlogTagsForm';
import MessagesForm from '../../Forms/MessagesForm';
import AppointmentForm from '../../Forms/AppointmentForm';
import BlogsForm from '../../Forms/BlogsForm';

const Admin = () => {
  const [showNewsletterTable, setShowNewsletterTable] = useState(false);
  const [showMessagesTable, setShowMessagesTable] = useState(false);
  const [showAppointmentsTable, setShowAppointmentsTable] = useState(false);
  const [showUsersTable, setShowUsersTable] = useState(false);
  const [showDepartmentsTable, setShowDepartmentsTable] = useState(false);
  const [showDoctorsTable, setShowDoctorsTable] = useState(false);
  const [showBlogsTable, setShowBlogsTable] = useState(false);
  const [showBlogTagsTable, setShowBlogTagsTable] = useState(false);
  const [showCategoriesTable, setShowCategoriesTable] = useState(false);

  const [categoriesData, categoriesError] = useCategories();
  const [tagsData, tagsError] = useTags();
  const [blogsData, blogsError] = useBlogs();
  const [doctorData, doctorError] = useDoctors();
  const [departmentData, departmentError] = useDepartments();
  const [userData, userError] = useUsers();
  const [appointmentData, appointmentError] = useAppointments();
  const [messageData, messageError] = useMessages();
  const [newsletterData, newsletterError] = useNewsletter();

  const[isModalOpen, setIsModelOpen] = useState(false);

  const handleDeleteNewsletter = async (id) => {
    console.log('Deleting newsletter with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete_newsletter/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting newsletter:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting newsletter:', error);
    }
  };

  const handleDeleteMessage = async (id) => {
    console.log('Deleting message with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete_message/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting message:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };
  
  const handleDeleteAppointment = async (id) => {
    console.log('Deleting appointment with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete_appointment/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting appointment:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    console.log('Deleting user with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete_user/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleDeleteDepartment = async (id) => {
    console.log('Deleting department with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete_department/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting department:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  const handleDeleteDoctor = async (id) => {
    console.log('Deleting doctor with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete_doctor/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting doctor:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  const handleDeleteBlog = async (id) => {
    console.log('Deleting blog with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete_blog/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting blog:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleDeleteTag = async (id) => {
    console.log('Deleting tag with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete_tag/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting tag:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting tag:', error);
    }
  };

  const handleDeleteCategory = async (id) => {
    console.log('Deleting category with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete_category/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting category:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const closeModal = () => {
    setIsModelOpen(false);
  }

  const openCreateModal = () => {
    if(!isModalOpen) setIsModelOpen(true);
  }

  if (categoriesError || tagsError || blogsError || doctorError || departmentError || userError || appointmentError || messageError || newsletterError)
    return <p>{categoriesError.message || tagsError.message || blogsError.message || doctorError.message || departmentError.message || userError.message || appointmentError.message || messageError.message || newsletterError.message}</p>;

  if (!categoriesData || !tagsData || !blogsData || !doctorData || !departmentData || !userData || !appointmentData || !messageData || !newsletterData)
    return null;

  return (
    <div className='admin-container'>
      <div className="button-container">
        <button type="button" onClick={() => { setShowNewsletterTable(!showNewsletterTable); setShowMessagesTable(false); setShowAppointmentsTable(false); setShowUsersTable(false); setShowDepartmentsTable(false); setShowDoctorsTable(false); setShowBlogsTable(false); setShowBlogTagsTable(false); setShowCategoriesTable(false); }}>Newsletters</button>
        <button type="button" onClick={() => { setShowMessagesTable(!showMessagesTable); setShowNewsletterTable(false); setShowAppointmentsTable(false); setShowUsersTable(false); setShowDepartmentsTable(false); setShowDoctorsTable(false); setShowBlogsTable(false); setShowBlogTagsTable(false); setShowCategoriesTable(false); }}>Messages</button>
        <button type="button" onClick={() => { setShowAppointmentsTable(!showAppointmentsTable); setShowNewsletterTable(false); setShowMessagesTable(false); setShowUsersTable(false); setShowDepartmentsTable(false); setShowDoctorsTable(false); setShowBlogsTable(false); setShowBlogTagsTable(false); setShowCategoriesTable(false); }}>Appointments</button>
        <button type="button" onClick={() => { setShowUsersTable(!showUsersTable); setShowNewsletterTable(false); setShowMessagesTable(false); setShowAppointmentsTable(false); setShowDepartmentsTable(false); setShowDoctorsTable(false); setShowBlogsTable(false); setShowBlogTagsTable(false); setShowCategoriesTable(false); }}>Users</button>
        <button type="button" onClick={() => { setShowDepartmentsTable(!showDepartmentsTable); setShowNewsletterTable(false); setShowMessagesTable(false); setShowAppointmentsTable(false); setShowUsersTable(false); setShowDoctorsTable(false); setShowBlogsTable(false); setShowBlogTagsTable(false); setShowCategoriesTable(false); }}>Departments</button>
        <button type="button" onClick={() => { setShowDoctorsTable(!showDoctorsTable); setShowNewsletterTable(false); setShowMessagesTable(false); setShowAppointmentsTable(false); setShowUsersTable(false); setShowDepartmentsTable(false); setShowBlogsTable(false); setShowBlogTagsTable(false); setShowCategoriesTable(false); }}>Doctors</button>
        <button type="button" onClick={() => { setShowBlogsTable(!showBlogsTable); setShowNewsletterTable(false); setShowMessagesTable(false); setShowAppointmentsTable(false); setShowUsersTable(false); setShowDepartmentsTable(false); setShowDoctorsTable(false); setShowBlogTagsTable(false); setShowCategoriesTable(false); }}>Blogs</button>
        <button type="button" onClick={() => { setShowBlogTagsTable(!showBlogTagsTable); setShowNewsletterTable(false); setShowMessagesTable(false); setShowAppointmentsTable(false); setShowUsersTable(false); setShowDepartmentsTable(false); setShowDoctorsTable(false); setShowBlogsTable(false); setShowCategoriesTable(false); }}>Blog Tags</button>
        <button type="button" onClick={() => { setShowCategoriesTable(!showCategoriesTable); setShowNewsletterTable(false); setShowMessagesTable(false); setShowAppointmentsTable(false); setShowUsersTable(false); setShowDepartmentsTable(false); setShowDoctorsTable(false); setShowBlogsTable(false); setShowBlogTagsTable(false); }}>Categories</button>
      </div>
      <div className="table-container">
        {showNewsletterTable && (
          <table className="admin-table">
            <tbody>
              <h2><strong>Newsletter Data</strong></h2>
              <tr>
                <td><strong>ID</strong></td>
                <td><strong>Email</strong></td>
                <td><strong>Buttons</strong></td>
              </tr>
              {newsletterData.newsletter.map((newsletters) => { return <tr key={newsletters.id}>
                <td>{newsletters.id}</td>
                <td>{newsletters.email}</td>
                <td>
                <button onClick={() => handleDeleteNewsletter(newsletters.id)}>Delete</button>
                <button>Update</button>
                </td>
              </tr> })}
            </tbody>
            <button onClick={openCreateModal}>Insert Data</button>
          {
            isModalOpen && <div className = 'modal'>
              <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <NewsletterForm />
              </div>
            </div>
          }
          </table>
        )}

        {showMessagesTable && (
          <table className="admin-table">
            <tbody>
              <h2><strong>Message Data</strong></h2>
              <tr>
                <td><strong>ID</strong></td>
                <td><strong>Name</strong></td>
                <td><strong>Email</strong></td>
                <td><strong>Phone</strong></td>
                <td><strong>Message</strong></td>
                <td><strong>Subject</strong></td>
                <td><strong>Buttons</strong></td>
              </tr>
              {messageData.messages.map((message) => { return <tr key={message.id}>
                <td>{message.id}</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.phone}</td>
                <td>{message.message}</td>
                <td>{message.subject}</td>
                <td>
                  <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                  <button>Update</button>
                </td>
              </tr> })}
            </tbody>
            <button onClick={openCreateModal}>Insert Data</button>
          {
            isModalOpen && <div className = 'modal'>
              <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <MessagesForm />
              </div>
            </div>
          }
          </table>
        )}
        
        {showAppointmentsTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Appointments Data</strong></h2>
              <tr>
              <td><strong>ID</strong></td>
              <td><strong>Name</strong></td>
              <td><strong>Phone</strong></td>
              <td><strong>Email</strong></td>
              <td><strong>Message</strong></td>
              <td><strong>Doctor</strong></td>
              <td><strong>Date</strong></td>
              <td><strong>Buttons</strong></td>
              </tr>
              {appointmentData.appointments.map((appointment) => {return <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.name}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.email}</td>
                <td>{appointment.message}</td>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td>
                <td>
                  <button onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
                  <button>Update</button>
                </td>
              </tr>}) }
            </tbody>
            <button onClick={openCreateModal}>Insert Data</button>
          {
            isModalOpen && <div className = 'modal'>
              <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <AppointmentForm />
              </div>
            </div>
          }
        </table>
      )}

{showUsersTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Users Data</strong></h2>
              <tr>
              <td><strong>ID</strong></td>
              <td><strong>Email</strong></td>
              <td><strong>Username</strong></td>
              <td><strong>Buttons</strong></td>
              </tr>
              {userData.users.map((user) => {return <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  <button>Update</button>
                </td>
              </tr>}) }
            </tbody>
            <p>Admin can't add users.</p>
        </table>
      )}

{showDepartmentsTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Departments Data</strong></h2>
            <tr>
            <td><strong>ID</strong></td>
            <td><strong>Department</strong></td>
            <td><strong>Buttons</strong></td>
            </tr>
            {departmentData.departments.map((department) => {return <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.department}</td>
              <td>
                  <button onClick={() => handleDeleteDepartment(department.id)}>Delete</button>
                  <button>Update</button>
                </td>
            </tr>}) }
          </tbody>
          <button onClick={openCreateModal}>Insert Data</button>
          {
            isModalOpen && <div className = 'modal'>
              <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <DepartmentForm />
              </div>
            </div>
          }
        </table>
      )}

{showDoctorsTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Doctors Data</strong></h2>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Name</strong></td>
              <td><strong>Buttons</strong></td>
            </tr>
            {doctorData.doctors.map((doctor) => {return <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.username}</td>
              <td>
                  <button onClick={() => handleDeleteDoctor(doctor.id)}>Delete</button>
                  <button>Update</button>
                </td>
            </tr>}) }
          </tbody>
          <button onClick={openCreateModal}>Insert Data</button>
          {
            isModalOpen && <div className = 'modal'>
              <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <DoctorsForm />
              </div>
            </div>
          }
        </table>
      )}

{showBlogsTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Blogs Data</strong></h2>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Email</strong></td>
              <td><strong>Message</strong></td>
              <td><strong>Person</strong></td>
              <td><strong>Buttons</strong></td>
            </tr>
            {blogsData.blogs.map((blog) => {return <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.email}</td>
              <td>{blog.message}</td>
              <td>{blog.name} {blog.surname}</td>
              <td>
                  <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
                  <button>Update</button>
                </td>
            </tr>}) }
          </tbody>
          <button onClick={openCreateModal}>Insert Data</button>
          {
            isModalOpen && <div className = 'modal'>
              <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <BlogsForm />
              </div>
            </div>
          }
        </table>
      )}

{showBlogTagsTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Blog Tags Data</strong></h2>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Tags</strong></td>
              <td><strong>Buttons</strong></td>
            </tr>
            {tagsData.blog_tags.map((tag) => {return <tr key={tag.id}>
              <td>{tag.id}</td>
              <td>{tag.tags}</td>
              <td>
                  <button onClick={() => handleDeleteTag(tag.id)}>Delete</button>
                  <button>Update</button>
                </td>
            </tr>}) }
          </tbody>
          <button onClick={openCreateModal}>Insert Data</button>
          {
            isModalOpen && <div className = 'modal'>
              <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <BlogTagsForm />
              </div>
            </div>
          }
        </table>
      )}

{showCategoriesTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Categories Data</strong></h2>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Category</strong></td>
              <td><strong>Buttons</strong></td>
            </tr>
            {categoriesData.categories.map((category) => {return <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.categories}</td>
              <td>
                  <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                  <button>Update</button>
                </td>
            </tr>}) }
          </tbody>
          <button onClick={openCreateModal}>Insert Data</button>
          {
            isModalOpen && <div className = 'modal'>
              <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <CategoriesForm />
              </div>
            </div>
          }
        </table>
      )}

      </div>
    </div>
  )
}

export default Admin;
