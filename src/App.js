import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import { Navigate, BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';

import { Routes, Route } from 'react-router-dom';
import Header from './Footer';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" Component={About} />
          <Route path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
