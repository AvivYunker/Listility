import React from 'react';
import Logo from '../assets/pizza.png';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return(
    <div class="navbar">
        <div class="leftSide">
            <img src={Logo}/>
        </div>
        <div class="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  );
}

export default Navbar;
