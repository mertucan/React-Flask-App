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
import NewsletterUpdateForm from '../../Forms/NewsletterUpdateForm';
import MessagesUpdateForm from '../../Forms/MessagesUpdateForm';
import AppointmentUpdateForm from '../../Forms/AppointmentUpdateForm';
import UsersUpdateForm from '../../Forms/UsersUpdateForm';
import DepartmentUpdateForm from '../../Forms/DepartmentUpdateForm';
import DoctorsUpdateForm from '../../Forms/DoctorsUpdateForm';
import BlogTagsUpdateForm from '../../Forms/BlogTagsUpdateForm';
import BlogsUpdateForm from '../../Forms/BlogsUpdateForm';
import CategoriesUpdateForm from '../../Forms/CategoriesUpdateForm';

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

  const [selectedNewsletter, setSelectedNewsletter] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const[selectedDepartment, setSelectedDepartment] = useState(null);
  const[selectedDoctor, setSelectedDoctor] = useState(null);
  const[selectedTag, setSelectedTag] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

    const handleUpdateNewsletter = async (newsletter) => {
        setSelectedNewsletter(newsletter);
    };

    const handleUpdateCategory = async (category) => {
      setSelectedCategory(category);
  };

    const handleUpdateBlog = async (blog) => {
      setSelectedBlog(blog);
  };

    const handleUpdateMessage = async (message) => {
      setSelectedMessage(message);
  };

  const handleUpdateAppointment = async (appointment) => {
    setSelectedAppointment(appointment);
};

const handleUpdateDepartment = async (department) => {
  setSelectedDepartment(department);
};

const handleUpdateUser = async (user) => {
  setSelectedUser(user);
};

const handleUpdateDoctor = async (doctor) => {
  setSelectedDoctor(doctor);
};

const handleUpdateTag = async (tag) => {
  setSelectedTag(tag);
};

    const handleCloseUpdateForm = () => {
        setSelectedNewsletter(null);
    };

    const handleCloseCategoryUpdateForm = () => {
      setSelectedCategory(null);
  };

    const handleCloseBlogUpdateForm = () => {
      setSelectedBlog(null);
  };

    const handleCloseTagForm = () => {
      setSelectedTag(null);
  };

    const handleCloseMessageUpdateForm = () => {
      setSelectedMessage(null);
  };

  const handleCloseAppointmentUpdateForm = () => {
    setSelectedAppointment(null);
};

const handleCloseDepartmentUpdateForm = () => {
  setSelectedDepartment(null);
};

const handleCloseUserUpdateForm = () => {
  setSelectedUser(null);
};

const handleCloseDoctorUpdateForm = () => {
  setSelectedDoctor(null);
};

  const closeModal = () => {
    setIsModelOpen(false);
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModelOpen(true);
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
    <div>
      <table className="admin-table">
        <tbody>
          <h2><strong>Newsletter Data</strong></h2>
          <tr>
            <td><strong>ID</strong></td>
            <td><strong>Email</strong></td>
            <td><strong>Buttons</strong></td>
          </tr>
          {newsletterData.newsletter.map((newsletter) => (
            <tr key={newsletter.id}>
              <td>{newsletter.id}</td>
              <td>{newsletter.email}</td>
              <td>
                <button onClick={() => handleDeleteNewsletter(newsletter.id)}>Delete</button>
                <button onClick={() => handleUpdateNewsletter(newsletter)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={openCreateModal}>Insert Data</button>
    </div>
  )}
  {selectedNewsletter && (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>&times;</span>
        <NewsletterUpdateForm newsletter={selectedNewsletter} onClose={handleCloseUpdateForm} />
      </div>
    </div>
  )}
  {
  isModalOpen && (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>&times;</span>
        <NewsletterForm />
      </div>
    </div>
  )
}

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
                  <button onClick={() => handleUpdateMessage(message)}>Update</button>
                </td>
              </tr> })}
            </tbody>
            <br></br>
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
        {selectedMessage && (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>&times;</span>
        <MessagesUpdateForm message={selectedMessage} onClose={handleCloseMessageUpdateForm} />
      </div>
    </div>
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
                <td>{appointment.doctor_name}</td>
                <td>{appointment.date}</td>
                <td>
                  <button onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
                  <button onClick={() => handleUpdateAppointment(appointment)}>Update</button>
                </td>
              </tr>}) }
            </tbody>
            <br></br>
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
      {selectedAppointment && (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>&times;</span>
        <AppointmentUpdateForm appointment={selectedAppointment} onClose={handleCloseAppointmentUpdateForm} />
      </div>
    </div>
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
                  <button onClick={() => handleUpdateUser(user)}>Update</button>
                </td>
              </tr>}) }
            </tbody>
            <p>Admin can't add users.</p>
        </table>
      )}
      {selectedUser && (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>&times;</span>
        <UsersUpdateForm user={selectedUser} onClose={handleCloseUserUpdateForm} />
      </div>
    </div>
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
                  <button onClick={() => handleUpdateDepartment(department)}>Update</button>
                </td>
            </tr>}) }
          </tbody>
          <br></br>
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
      {selectedDepartment && (
    <div className='modal'>
        <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <DepartmentUpdateForm department={selectedDepartment} onClose={handleCloseDepartmentUpdateForm} />
        </div>
    </div>
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
                  <button onClick={() => handleUpdateDoctor(doctor)}>Update</button>
                </td>
            </tr>}) }
          </tbody>
          <br></br>
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
      {selectedDoctor && (
    <div className='modal'>
        <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <DoctorsUpdateForm doctor={selectedDoctor} onClose={handleCloseDoctorUpdateForm} />
        </div>
    </div>
)}
      

{showBlogsTable && (
        <table className="admin-table">
          <tbody>
            <h2><strong>Blogs Data</strong></h2>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Email</strong></td>
              <td><strong>Message</strong></td>
              <td><strong>Name</strong></td>
              <td><strong>Surname</strong></td>
              <td><strong>Buttons</strong></td>
            </tr>
            {blogsData.blogs.map((blog) => {return <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.email}</td>
              <td>{blog.message}</td>
              <td>{blog.name}</td>
              <td>{blog.surname}</td>
              <td>
                  <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
                  <button onClick={() => handleUpdateBlog(blog)}>Update</button>
                </td>
            </tr>}) }
          </tbody>
          <br></br>
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
      {selectedBlog && (
    <div className='modal'>
        <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <BlogsUpdateForm blogs={selectedBlog} onClose={handleCloseBlogUpdateForm} />
        </div>
    </div>
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
            {tagsData.blog_tags.map((tag) => {
                return (
                    <tr key={tag.id}>
                        <td>{tag.id}</td>
                        <td>{tag.tags}</td>
                        <td>
                            <button onClick={() => handleDeleteTag(tag.id)}>Delete</button>
                            <button onClick={() => handleUpdateTag(tag)}>Update</button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
        <br></br>
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
{selectedTag && (
    <div className='modal'>
        <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <BlogTagsUpdateForm tag={selectedTag} onClose={handleCloseTagForm} />
        </div>
    </div>
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
                  <button onClick={() => handleUpdateCategory(category)}>Update</button>
                </td>
            </tr>}) }
          </tbody>
          <br></br>
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
      {selectedCategory && (
    <div className='modal'>
        <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <CategoriesUpdateForm category={selectedCategory} onClose={handleCloseCategoryUpdateForm} />
        </div>
    </div>
)}

      </div>
    </div>
  )
}

export default Admin;
