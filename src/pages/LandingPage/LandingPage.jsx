import React from "react";
import module from "./landingPage.module.css";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import landingAnimation from "../../../public/landingAnimation.json";
import Button from "@mui/material/Button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={module.landingPage}>
      <Container>
        {/* ----- Animation ------- */}
        <div className={module.AnimationCoffee}>
          <Lottie
            loop={false}
            animationData={landingAnimation}
            style={{ height: "350px" }}
          />
        </div>

        {/* ------- Button menu ------- */}
        <div className={module.btn_Container}>
          <Button className={module.btnMenu}> <Link>MENU</Link> </Button>
        </div>


        {/* -------- Address sec -------- */}
        <div className={module.address}>
          <h3 className={module.address_title}>المنصور - شارع النقابات</h3>
          <FaMapMarkerAlt className={module.map_icon} />
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
