import React from 'react'
import module from "./productPage.module.css";
import { Container } from '@mui/material';
import ProductCard from '../../components/productCard/ProductCard';

function ProductPage() {

    const data = [
        {
            id:1,
            title: "بركر لحم",
            img: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
        },
        {
            id:2,
            title: "بركر دجاج",
            img: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
        },
        {
            id:3,
            title: "بركر بالجبن",
            img: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
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
                <ProductCard />
            ))}
        </div>
     </Container>
    </div>
  )
}

export default ProductPage
