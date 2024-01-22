import React from "react";
import styles from "./Header.module.css";
import logo from "../../../src/assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import LikedProducts from "./LikedProducts";
import ShoppingCard from "./ShoppingCard";

const Header = () => {
  const [likedProduct, setLikedProduct] = useState([]);
  const [cardItem, setCardItem] = useState([]);

  const [isShoppingCardShow, setIsShoppingCardShow] = useState(false);
  const [isLikedProductShow, setIsLikedProductShow] = useState(false);

  const shoppingCardHandler = () => {
    setIsShoppingCardShow(!isShoppingCardShow);
  };

  const likedProductHandler = () => {
    setIsLikedProductShow(!isLikedProductShow);
  };

  const shopHandler = () => {
    window.scrollTo({
      top: 1300,
      behavior: "smooth"
    });
  }

  return (
    <div className={styles.headerContainer}>
      {isShoppingCardShow && <ShoppingCard cardItems={cardItem} />}
      {isLikedProductShow && <LikedProducts likedProducts={likedProduct} />}

      {/* LOGO */}
      <div>
        <img src={logo} alt="Hirsa Logo" className={styles.logo} />
      </div>

      {/* MENU */}
      <div className={styles.linkContainer}>
        <Link className={styles.link} to="/home">
          خانه
        </Link>
        <Link className={styles.link} onClick={shopHandler}>
          محصولات
        </Link>
        <Link className={styles.link} to="/services">
          خدمات تخصصی
        </Link>
        <Link className={styles.link} to="/contact-us">
          ارتباط با ما
        </Link>
        <Link className={styles.link} to="/about-us">
          درباره ما
        </Link>
      </div>

      {/* ICONS */}
      <div className={styles.iconsContainer}>
        <div>
          <IoIosSearch fontSize="36px" style={{ cursor: "pointer" }} />
        </div>
        <div className={styles.iconBadge} onClick={likedProductHandler}>
          <CiHeart fontSize="36px" style={{ cursor: "pointer" }} />{" "}
          <span className={styles.badge}>{likedProduct.length}</span>
        </div>
        <div className={styles.iconBadge} onClick={shoppingCardHandler}>
          <IoBagHandle fontSize="36px" style={{ cursor: "pointer" }} />{" "}
          <span className={styles.badge}>{cardItem.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;