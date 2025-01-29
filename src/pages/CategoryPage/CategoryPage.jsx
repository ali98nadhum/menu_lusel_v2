import React from 'react'
import module from "./category.module.css";
import foodAnimation from "../../../public/foodAnimation.json";
import Lottie from "lottie-react";
import { Container } from '@mui/material';

const CategoryPage = () => {
  return (
    <div className={module.CategoryPage}>
        <Container>
            {/* ---- category header ------- */}
      <div className={module.category_header}>
        <Lottie
            loop={true}
            animationData={foodAnimation}
            style={{ height: "80px" }}
          />
           <h1>قائمه الطعام</h1>
      </div>
      <hr className={module.line} />
      {/* ------- category card ------- */}
      <div className={module.grid}></div>
      </Container>
    </div>
  )
}

export default CategoryPage
