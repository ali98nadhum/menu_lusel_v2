import React from 'react'
import module from "./productPage.module.css";
import { Container } from '@mui/material';
import ProductCard from '../../components/productCard/ProductCard';

function ProductPage() {

    const data = [
        {
            id:1,
            title: "بركر لحم",
            img: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png",
            price: 4500
        },
        {
            id:2,
            title: "بركر دجاج",
            img: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png",
            price: 5000
        },
        {
            id:3,
            title: "بركر بالجبن",
            img: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png",
            price: 4500
        },
    ]
  return (
    <div className={module.productPage}>
     <Container>
        {/* ------ Header product -------- */}
        <div className={module.productHeader}>
            <h1>🍽️ البركر</h1>
            <hr/>
        </div>
        {/* ------ Product sec -------- */}
        <div className={module.productSec}>
            {data.map((item) => (
                <ProductCard data={item} />
            ))}
        </div>
     </Container>
    </div>
  )
}

export default ProductPage
