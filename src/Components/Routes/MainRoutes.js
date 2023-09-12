import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and update imports

import HomePage from '../pages/Homepage/HomePage';
import NavBar from '../pages/Navbar/NavBar';
import Footer from '../pages/Footer/Footer';
import Infrastructure from '../pages/Infrastructure/Infrastructure';
import OurServices from '../pages/Services/OurServices';
import Programmes from '../pages/Programmes/Programmes';

function MainRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} /> {/* 'element' instead of 'component' */}
    <Route path="/infrastructure" element={<Infrastructure/>} />
    <Route path='/services' element={<OurServices/>}/>
    <Route path='/programmes' element={<Programmes/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default MainRoutes;
