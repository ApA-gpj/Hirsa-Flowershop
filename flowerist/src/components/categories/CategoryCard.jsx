import React from "react";
import styles from "./Categories.module.css";

const CategoryCard = ({ src, title, quantity }) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.imgContent}>
        <img className={styles.cardImg} src={src} alt={title} />
      </div>
      <div className={styles.textContent}>
        <h3 >{title}</h3>
        <p >({quantity} مورد)</p>
      </div>
    </div>
  );
};
export default CategoryCard;