import React, { useState } from "react";
import styles from "./Products.module.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Products = () => {

  const handleCategoryClick = (event) => {
    console.log('clicked', event);
  };

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsHead}>
        <h4>محصولات ما</h4>
      </div>
      <div className={styles.productsCategories}>
        <button category="all" className={styles.productsCatBtn}>
          همه
        </button>
        <button category="packedFlower" className={styles.productsCatBtn} onClick={ ()=> handleCategoryClick(event)} >
          دسته گل
        </button>
        <button category="singleFlower" className={styles.productsCatBtn}>
          شاخه گل
        </button>
        <button category="apartement" className={styles.productsCatBtn}>
          گیاهان آپارتمانی
        </button>
        <button category="wreath" className={styles.productsCatBtn}>
          تاج گل
        </button>
        <button category="giftPacked" className={styles.productsCatBtn}>
          بسته‌های کادویی
        </button>
      </div>
      <div className={styles.productCardContainer}>
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
