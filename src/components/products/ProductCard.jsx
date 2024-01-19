import React, { useRef, useState } from "react";
import styles from "./Products.module.css";
import { CiHeart } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";

const ProductCard = () => {
  const productsArr = [
    {
      id: 1,
      imgSrc: "../../src/assets/productsImages/product1.webp",
      title: "شاخه گل رز سرخ طبیعی",
      price: 60_000,
      category: "singleFlower",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 2,
      imgSrc: "../../src/assets/productsImages/product2.webp",
      title: "شاخه گل نرگس طبیعی",
      price: 60_000,
      category: "singleFlower",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 3,
      imgSrc: "../../src/assets/productsImages/product3.webp",
      title: "گل آپارتمانی کروتون",
      price: 1_500_000,
      category: "apartement",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 4,
      imgSrc: "../../src/assets/productsImages/product4.webp",
      title: "گل آپارتمانی بابا آدم",
      price: 2_500_000,
      category: "apartement",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 5,
      imgSrc: "../../src/assets/productsImages/product5.webp",
      title: "دسته گل ویژه هیرسا",
      price: 1_250_000,
      category: "packedFlower",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 6,
      imgSrc: "../../src/assets/productsImages/product6.webp",
      title: "دسته گل عروس",
      price: 4_000_000,
      category: "packedFlower",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 7,
      imgSrc: "../../src/assets/productsImages/product7.webp",
      title: "تاج گل ختمی",
      price: 3_000_000,
      category: "wreath",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 8,
      imgSrc: "../../src/assets/productsImages/product8.webp",
      title: "تاج گل هپی مپی",
      price: 3_500_000,
      category: "wreath",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 9,
      imgSrc: "../../src/assets/productsImages/product9.webp",
      title: "پک کادویی ولنتاین",
      price: 1_500_000,
      category: "giftPacked",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 10,
      imgSrc: "../../src/assets/productsImages/product10.webp",
      title: "پک کادویی تولد",
      price: 1_500_000,
      category: "giftPacked",
      isLiked: false,
      isHovered: false,
    },
  ];

  const [product, setProduct] = useState(productsArr);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
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
    </>
  );
};

export default ProductCard;
