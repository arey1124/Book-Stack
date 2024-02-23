import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { isAuthenticated } from './util';
import Navbar from './components/Navbar';
import { LateFeeSystemSearch, LateFeeSystemUserDetails } from './components/LateFeeSystem/AdminSide';
import Home from './components/Details/Home';
import About from './components/Details/About';
import Contact from './components/Details/ContactUs';
import Faq from './components/Details/Faq';
import  Favorites  from './components/Favorites/Favorites';


const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contactus" element={<Contact />}/>

        
      </Routes>
    </Router>

  );
}

export default App;

