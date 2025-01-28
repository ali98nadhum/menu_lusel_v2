import React from 'react'
import module from "./landingPage.module.css";
import Container from '@mui/material/Container';
import Lottie from "lottie-react";
import coffeeAnimation  from "../../../public/coffee-Animation.json";
import Button from '@mui/material/Button';

const LandingPage = () => {
  return (
    <div className={module.landingPage}>
     <Container>
        {/* ----- Animation ------- */}
        <div className={module.AnimationCoffee}>
            <Lottie loop={false} animationData={coffeeAnimation} style={{height: "250px"}} />
        </div>
        {/* ------- Button menu ------- */}
        <div className={module.btn_menu}>
        <Button variant="contained">المنيو</Button>
        </div>
     </Container>
    </div>
  )
}

export default LandingPage
