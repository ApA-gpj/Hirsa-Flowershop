import React from "react";
import styles from "./Header.module.css";
import logo from "../../../src/assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [likes, setLikes] = useState([]);

  const [shoppingCard, setShoppingCard] = useState([]);

  return (

    <div className={styles.headerContainer}>

      {/* LOGO */}
      <div>
        <img src={logo} alt="Hirsa Logo" className={styles.logo} />
      </div>

      {/* MENU */}
      <div className={styles.linkContainer}>
        <Link className={styles.link} to="/home">
          خانه
        </Link>
        <Link className={styles.link} to="/products">
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
          <IoIosSearch fontSize="30px" style={{ cursor: "pointer" }} />
        </div>
        <div className={styles.iconBadge}>
          <CiHeart fontSize="30px" style={{ cursor: "pointer" }} />{" "}
          <span className={styles.badge}>{likes.length}</span>
        </div>
        <div className={styles.iconBadge}>
          <IoBagHandle fontSize="30px" style={{ cursor: "pointer" }} />{" "}
          <span className={styles.badge}>{shoppingCard.length}</span>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
