import React from 'react'
import module from "./productPage.module.css";
import { Container } from '@mui/material';
import ProductCard from '../../components/productCard/ProductCard';

function ProductPage() {
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
            <ProductCard />
        </div>
     </Container>
    </div>
  )
}

export default ProductPage
