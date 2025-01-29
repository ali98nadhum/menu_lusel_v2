import React from "react";
import module from "./footer.module.css";
import Container from "@mui/material/Container";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={module.top}>
          <div className={module.left_sec}>
            <h3>ss</h3>
            <p>f</p>
          </div>
          <div className={module.right}>
            <h2></h2>
            <div className={module.icon_side}>
                <a href="https://instagram.com/lusail_cafe?igshid=MTNiYzNiMzkwZA=="><FaInstagram className="insta-icon" /></a>
                <a href="tel:+7705985657"><FaWhatsapp  className="whats-icon"/></a>
            </div>
          </div>
        </div>

        <div className={module.bottom}></div>
      </Container>
    </footer>
  );
};

export default Footer;
