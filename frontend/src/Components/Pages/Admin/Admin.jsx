import React, { useState } from 'react';
import '../Admin/Admin.css'
import { useDoctors, useDepartments, useCategories, useTags, useUsers, useBlogs, useAppointments, useMessages, useNewsletter } from '../../../Hooks';

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
              </tr>
              {newsletterData.newsletter.map((newsletters) => { return <tr key={newsletters.id}>
                <td>{newsletters.id}</td>
                <td>{newsletters.email}</td>
              </tr> })}
            </tbody>
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
              </tr>
              {messageData.messages.map((message) => { return <tr key={message.id}>
                <td>{message.id}</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.phone}</td>
                <td>{message.message}</td>
                <td>{message.subject}</td>
              </tr> })}
            </tbody>
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
              </tr>
              {appointmentData.appointments.map((appointment) => {return <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.name}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.email}</td>
                <td>{appointment.message}</td>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td>
              </tr>}) }
            </tbody>
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
              </tr>
              {userData.users.map((user) => {return <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
              </tr>}) }
            </tbody>
        </table>
      )}

{showDepartmentsTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Departments Data</strong></h2>
            <tr>
            <td><strong>ID</strong></td>
            <td><strong>Department</strong></td>
            </tr>
            {departmentData.departments.map((department) => {return <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.department}</td>
            </tr>}) }
          </tbody>
        </table>
      )}

{showDoctorsTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Doctors Data</strong></h2>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Name</strong></td>
            </tr>
            {doctorData.doctors.map((doctor) => {return <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.username}</td>
            </tr>}) }
          </tbody>
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
            </tr>
            {blogsData.blogs.map((blog) => {return <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.email}</td>
              <td>{blog.message}</td>
              <td>{blog.name} {blog.surname}</td>
            </tr>}) }
          </tbody>
        </table>
      )}

{showBlogTagsTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Blog Tags Data</strong></h2>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Tags</strong></td>
            </tr>
            {tagsData.blog_tags.map((tag) => {return <tr key={tag.id}>
              <td>{tag.id}</td>
              <td>{tag.tags}</td>
            </tr>}) }
          </tbody>
        </table>
      )}

{showCategoriesTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Categories Data</strong></h2>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Category</strong></td>
            </tr>
            {categoriesData.categories.map((category) => {return <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.categories}</td>
            </tr>}) }
          </tbody>
        </table>
      )}

      </div>
    </div>
  )
}

export default Admin;
