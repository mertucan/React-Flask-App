import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Appointment from './Components/Pages/Appointment';
import Blogs from './Components/Pages/Blogs';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login/Login';
import Logout from './Components/Pages/Logout';
import Portfolio from './Components/Pages/Portfolio';
import Register from './Components/Pages/Register/Register';
import Admin from './Components/Pages/Admin/Admin';
import { Route, Routes } from 'react-router-dom';
import Learn from './Components/Pages/Learn/Learn';
import About from './Components/Pages/About/About';
import Services from './Components/Services/Services';

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true); // varsayılan olarak kullanıcı giriş yapmış

  return (
    <div className='container'>
      <Navbar setIsUserLoggedIn={setIsUserLoggedIn} isLoggedIn={isUserLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout setIsUserLoggedIn={setIsUserLoggedIn} />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
