import React from "react";  
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
          <img src='A.jpg' ></img>
          <ul className="tools">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Out Room</a></li> 
            <li><a href="/services">Galler</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/blog">Blog</a></li>
            </ul> 
        
       </nav>
   </>
  );
}
export default Navbar;