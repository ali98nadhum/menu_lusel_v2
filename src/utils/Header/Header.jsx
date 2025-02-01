import React from 'react'
import module from  "./header.module.css";
import logo from "../../assets/nav-logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <div className={module.Header}>
        <div className={module.logo}>
            <Link to="/"> <img src={logo} alt="logo" /> </Link>
        </div>
   </div>
  )
}

export default Header
