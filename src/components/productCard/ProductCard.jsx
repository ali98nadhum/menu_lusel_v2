import React from "react";
import { motion } from "framer-motion";
import module from "./productCard.module.css";

const ProductCard = ({ data , categoryData }) => {
  return (
    <motion.div
      className={module.menu}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 120 }}
    >
      <motion.div
        className={module.menu_item}
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <motion.img
          src={categoryData.image.url}
          alt={data.title}
          className={module.image}
          initial={{ scale: 0.9, rotate: -3 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className={module.item_info}>
          <h3>{data.title}</h3>
          <motion.span
            className={module.price}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            {data.price} IQD
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
