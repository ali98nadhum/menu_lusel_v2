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
            <h3>Lusail Cafe</h3>
            <p>Lusail cafe is that specialist cafe in iraq</p>
          </div>
          <div className={module.right_sec}>
            <h3>للتواصل</h3>
            <div className={module.icon_side}>
                <a href="https://instagram.com/lusail_cafe?igshid=MTNiYzNiMzkwZA=="><FaInstagram className={module.insta_icon} /></a>
                <a href="tel:+7705985657"><FaWhatsapp  className={module.whats_icon}/></a>
            </div>
          </div>
        </div>

        <div className={module.bottom}>
            <hr />
            <div className={module.dev_info}>
                <p>Development by Ali Nadhum</p>
                <a href="tel:+7717397939"><FaWhatsapp  className={module.whats_icon}/></a>
            </div>
        </div>
      </Container>
    </footer>
  );
};



export default Footer;
