import React from 'react'
import module from "./loadingpage.module.css";
import loadingAnimation from "../../../public/loadingAnimation.json";
import Lottie from 'lottie-react';

const LoadingPage = () => {
  return (
    <div className={module.loadingPage}>
      <div className={module.logger}>
        <Lottie
          loop={true}
          animationData={loadingAnimation}
          style={{ height: "200px" }}
        />
      </div>
    </div>
  )
}

export default LoadingPage
