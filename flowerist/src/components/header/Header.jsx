import React from 'react'
import styles from "./Header.module.css";
import logo from "../../../src/assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [likes , setLikes] = useState([])
  const [shoppingCard , setShoppingCard] = useState([])
  return (
    <div className={styles.headerContainer}>
      {/* ICONS */}
      <div className={styles.iconsContainer}>
        <div>
          <IoIosSearch fontSize="30px" style={{cursor : 'pointer'}}/>
        </div>
        <div className={styles.iconBadge}>
          <CiHeart fontSize="30px" style={{cursor : 'pointer'}}/> <span className={styles.badge}>{likes.length}</span>
        </div>
        <div className={styles.iconBadge}>
          <IoBagHandle fontSize="30px" style={{cursor : 'pointer'}}/>{" "}
          <span className={styles.badge}>{shoppingCard.length}</span>
        </div>
      </div>

      {/* MENU */}
      <div>
        <ul className={styles.linkContainer}>
          <li>
            {" "}
            <a className={styles.link} href="/home">
              خانه
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className={styles.link} href="/shop">
              فروشگاه
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className={styles.link} href="/services">
              خدمات
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className={styles.link} href="/contact-us">
              {" "}
              تماس با ما
            </a>
          </li>
          <li>
            {" "}
            <a className={styles.link} href="/about-us">
              {" "}
              درباره ما
            </a>
          </li>
        </ul>
      </div>

      {/* LOGO */}
      <div>
        <img src={logo} alt="Hirsa Logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Header;