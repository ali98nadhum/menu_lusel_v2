import React, { useEffect } from 'react'
import module from "./category.module.css";
import foodAnimation from "../../../public/foodAnimation.json";
import Lottie from "lottie-react";
import { Container, CircularProgress } from '@mui/material';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import LoadingPage from '../../utils/LoadingPage/LoadingPage';
import { useStore } from '../../store';

const CategoryPage = () => {
  const { categoryData, fetchData, isLoading } = useStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={module.CategoryPage}>
      <Container>
        {/* ---- category header ------- */}
        <div className={module.category_header}>
          <Lottie loop={true} animationData={foodAnimation} style={{ height: "80px" }} />
          <h1>قائمه الطعام</h1>
        </div>
        <hr className={module.line} />

        {isLoading ? (
          <div className={module.loadingContainer}>
            <LoadingPage/>
          </div>
        ) : (
          <div className={module.grid}>
            {categoryData.map(item => (
              <CategoryCard key={item._id} data={item} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default CategoryPage;
