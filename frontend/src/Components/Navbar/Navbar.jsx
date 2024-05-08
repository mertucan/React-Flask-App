import React from 'react';
import './Navbar.css';
import logo from '../../../public/img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
         <Link to="/" className='logo-link'><img src={logo} alt="Logo" className='logo'/></Link>
        <ul>
            <Link to = "/" className='custom-link'>Home</Link> &nbsp;
            <Link to = "/blogs" className='custom-link'>Blogs</Link> &nbsp;
            <Link to = "/portfolio" className='custom-link'>Portfolio Details</Link> &nbsp;
            <Link to = "/contact" className='custom-link'>Contact Us</Link> &nbsp;
            <Link to = "/appointment" className='custom-link'>Appointment</Link> &nbsp;
            <Link to = "/login" className='custom-link'>Login</Link> &nbsp;
            <Link to = "/register" className='custom-link'>Register</Link> &nbsp;
            <Link to = "/logout" className='custom-link'>Logout</Link>
            <Link to = "/admin" className='custom-link'>Admin</Link>
        </ul>
    </div>
  )
}

export default Navbar