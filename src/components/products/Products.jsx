import React, { useState } from "react";
import styles from "./Products.module.css";
import { CiHeart } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import productImage1 from "../../assets/productsImages/product1.webp";
import productImage2 from "../../assets/productsImages/product2.webp";
import productImage3 from "../../assets/productsImages/product3.webp";
import productImage4 from "../../assets/productsImages/product4.webp";
import productImage5 from "../../assets/productsImages/product5.webp";
import productImage6 from "../../assets/productsImages/product6.webp";
import productImage7 from "../../assets/productsImages/product7.webp";
import productImage8 from "../../assets/productsImages/product8.webp";
import productImage9 from "../../assets/productsImages/product9.webp";
import productImage10 from "../../assets/productsImages/product10.webp";

const Products = () => {
  const productsArr = [
    {
      id: 1,
      imgSrc: productImage1,
      title: "شاخه گل رز سرخ طبیعی",
      price: 60_000,
      category: "شاخه گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 2,
      imgSrc: productImage2,
      title: "شاخه گل نرگس طبیعی",
      price: 60_000,
      category: "شاخه گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 3,
      imgSrc: productImage3,
      title: "گل آپارتمانی کروتون",
      price: 1_500_000,
      category: "گیاهان آپارتمانی",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 4,
      imgSrc: productImage4,
      title: "گل آپارتمانی بابا آدم",
      price: 2_500_000,
      category: "گیاهان آپارتمانی",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 5,
      imgSrc: productImage5,
      title: "دسته گل ویژه هیرسا",
      price: 1_250_000,
      category: "دسته گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 6,
      imgSrc: productImage6,
      title: "دسته گل عروس",
      price: 4_000_000,
      category: "دسته گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 7,
      imgSrc: productImage7,
      title: "تاج گل ختمی",
      price: 3_000_000,
      category: "تاج گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 8,
      imgSrc: productImage8,
      title: "تاج گل هپی مپی",
      price: 3_500_000,
      category: "تاج گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 9,
      imgSrc: productImage9,
      title: "پک کادویی ولنتاین",
      price: 1_500_000,
      category: "بسته‌های کادویی",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 10,
      imgSrc: productImage10,
      title: "پک کادویی تولد",
      price: 1_500_000,
      category: "بسته‌های کادویی",
      isLiked: false,
      isHovered: false,
    },
  ];

  const allCategories = [
    "همه",
    ...new Set(productsArr.map((data) => data.category)),
  ];

  const [product, setProduct] = useState(productsArr);
  const [category, setCategory] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("همه");

  const filterMenus = (category) => {
    if (category === "همه") {
      setProduct(productsArr);
      return;
    }
    let filteredMenus = productsArr.filter((menu) => menu.category === category);
    setProduct(filteredMenus);
  };

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsHead}>
        <h4>محصولات ما</h4>
      </div>
      <div className={styles.productsCategories}>
        {category.map((categories, index) => (
          <button
            key={index}
            className={`${styles.productsCatBtn} ${
              categories === activeCategory ? `${styles.active}` : ""
            } `}
            onClick={() => {
              setActiveCategory(categories);
              filterMenus(categories);
            }}
          >
            {categories}
          </button>
        ))}
      </div>
      <div className={styles.productCardContainer}>
        {product.map((item) => (
          <div className={styles.productCard} key={item.id}>
            {/* btns */}
            <div className={styles.btnContainer}>
              <div className={styles.btnContent}>
                <CiHeart className={styles.btnIcon} />
              </div>
              <div className={styles.btnContent}>
                <IoBagHandle className={styles.btnIcon} />
              </div>
            </div>

            {/* image */}
            <div>
              <img
                className={styles.productImg}
                src={item.imgSrc}
                alt={`${item.title} عکس`}
              />
            </div>

            {/* title */}
            <div>
              <p className={styles.productTitle}>{item.title}</p>
            </div>
            {/* price */}
            <div>
              <p className={styles.productPrice}>
                {item.price.toLocaleString()}{" "}
                <span className={styles.toman}>تومان</span>
              </p>
            </div>

            {/* add to cart */}
            <div>
              <button className={styles.productBtn}>
                اضافه کردن به سبد خرید
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
