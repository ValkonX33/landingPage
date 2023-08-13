import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
      <div className="container">
        <a className="navbar-brand" href="#">
          Brand
        </a>
        <button
         id='custom'
          className="navbar-toggler navbar-toggler-icon-black"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">


          <ul className="navbar-nav me-auto">
            <li className="nav-item">
          <NavLink
     to='/home' className="nav-link" href="#"  style={{ color:'black' }} >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          to='/About' className="nav-link" href="#"   style={{ color:'black' }}    >About</NavLink>
        </li>


     

        <li className="nav-item">
          <NavLink
         to='/contact' className="nav-link" href="#"  style={{ color:'black' }} >Contact</NavLink>
        </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-group btn-primary me-2">Buy Now</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='separation-line'></div>
    </nav>
    
    </>
  );
};

export default Navbar;
