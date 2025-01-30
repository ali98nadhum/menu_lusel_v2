import React from 'react'
import module from "./category.module.css";
import foodAnimation from "../../../public/foodAnimation.json";
import Lottie from "lottie-react";
import { Container } from '@mui/material';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const data = [
    {
        id: 1,
        title: "البركر",
        img: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
    },
    {
        id: 2,
        title: "بيتزا",
        img: "https://t3.ftcdn.net/jpg/06/27/23/56/360_F_627235669_iz0O2leKYRzjxAKdFP7odpp9eCOZREtN.jpg"
    },
    {
        id: 3,
        title: "البركر",
        img: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
    },
    {
        id: 4,
        title: "البركر",
        img: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
    },
    {
        id: 5,
        title: "البركر",
        img: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
    },
]

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
      <div className={module.grid}>
        {data.map(item => (
          <CategoryCard data={item}/>
        ))}
      </div>
      </Container>
    </div>
  )
}

export default CategoryPage
