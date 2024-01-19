import React from "react";
import styles from "./Categories.module.css";
import CategoryCard from "./CategoryCard";
import categoryImg1 from "/src/assets/categories1.webp";
import categoryImg2 from "/src/assets/categories2.webp";
import categoryImg3 from "/src/assets/categories3.webp";
import categoryImg4 from "/src/assets/categories4.webp";

const Categories = () => {
  const categoryArr = [
    {
      id: 1,
      src: categoryImg1,
      title: "گل‌های طبیعی",
      quantity: 25,
    },
    {
      id: 2,
      src: categoryImg2,
      title: "گیاهان آپارتمانی",
      quantity: 162,
    },
    {
      id: 3,
      src: categoryImg3,
      title: "کاکتوس‌ها",
      quantity: 58,
    },
    {
      id: 4,
      src: categoryImg4,
      title: "گیاهان زینتی",
      quantity: 25,
    },
  ];

  return (
    <>
      <h3 className={styles.categoryHeadTitle}>دسته بندی‌ها</h3>
      <div className={styles.categoryContainer}>
        {categoryArr.map((item) => (
          <CategoryCard {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Categories;
