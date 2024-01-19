import React, { useState } from "react";
import styles from "./Products.module.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsHead}>
        <h4>محصولات ما</h4>
      </div>
      <div className={styles.productsCategories}>
        <Link category="all" className={styles.productsCatBtn}>
          همه
        </Link>
        <Link category="packedFlower" className={styles.productsCatBtn}>
          دسته گل
        </Link>
        <Link category="singleFlower" className={styles.productsCatBtn}>
          شاخه گل
        </Link>
        <Link category="apartement" className={styles.productsCatBtn}>
          گیاهان آپارتمانی
        </Link>
        <Link category="wreath" className={styles.productsCatBtn}>
          تاج گل
        </Link>
        <Link category="giftPacked" className={styles.productsCatBtn}>
          بسته‌های کادویی
        </Link>
      </div>
      <div className={styles.productCardContainer}>
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
