import React from "react";
import module from "./categorycard.module.css";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryCard = (props) => {
  return (
    <motion.div
      className={module.test}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`/category/product/id`} style={{ textDecoration: "none" }}>
        <Card className={module.card} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              className={module.img}
              component="img"
              height="200"
              image={props.data.img}
              sx={{ width: "100%" }}
            />
            <CardContent>
              <Typography
                className={module.title}
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "22px",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "#f7d58d",
                  borderRadius: "20px",
                  fontFamily: "Almarai, sans-serif",
                  padding: "3px",
                }}
              >
                {props.data.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
