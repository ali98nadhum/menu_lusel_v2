import React from 'react'
import module from  "./header.module.css";
import logo from "../../assets/nav-logo.png";

const Header = () => {
  return (
   <div className={module.Header}>
        <div className={module.logo}>
            <img src={logo} alt="logo" />
        </div>
   </div>
  )
}

export default Header
