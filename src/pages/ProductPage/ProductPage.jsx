import React, { useEffect } from 'react';
import module from "./productPage.module.css";
import { Container} from '@mui/material';
import ProductCard from '../../components/productCard/ProductCard';
import { useStore } from '../../store';
import { useParams } from 'react-router-dom';
import LoadingPage from "../../utils/LoadingPage/LoadingPage";


function ProductPage() {

    
    const { oneCategoryData, fetchOneCategory, isLoading } = useStore();
    const { id } = useParams();

    useEffect(() => {
        fetchOneCategory(id);
    }, [id, fetchOneCategory]);

    return (
        <div className={module.productPage}>
            <Container>
                {/* ------ Header product -------- */}
                <div className={module.productHeader}>
                    <h1>🍽️ {oneCategoryData?.title || "جاري التحميل..."}</h1>
                    <hr />
                </div>

                {/* ------ Product sec -------- */}
                <div className={module.productSec}>
                    {isLoading ? (
                       <LoadingPage/>
                    ) : (
                        oneCategoryData?.products?.length > 0 ? (
                            oneCategoryData.products.map((item) => (
                                <ProductCard key={item._id} data={item} categoryData={oneCategoryData} />
                            ))
                        ) : (
                            <p>لا توجد منتجات متاحة.</p>
                        )
                    )}
                </div>
            </Container>
        </div>
    );
}

export default ProductPage;
