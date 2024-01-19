import React from "react";
import styles from "./Categories.module.css";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categoryArr = [
    {
      id: 1,
      src: "/src/assets/categories1.webp",
      title: "گل‌های طبیعی",
      quantity: 25,
    },
    {
      id: 2,
      src: "/src/assets/categories2.webp",
      title: "گیاهان آپارتمانی",
      quantity: 162,
    },
    {
      id: 3,
      src: "/src/assets/categories3.webp",
      title: "کاکتوس‌ها",
      quantity: 58,
    },
    {
      id: 4,
      src: "/src/assets/categories4.webp",
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
