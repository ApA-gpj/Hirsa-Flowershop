import React, { useContext, useState, useRef } from "react";
import styles from "./Products.module.css";
import { CiHeart } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import productsCtx from "../../contexts/productsCtx";


const Products = () => {

  const productsArr = useContext(productsCtx)

  const allCategories = [
    "همه",
    ...new Set(productsArr.map((data) => data.category)),
  ];

  const [product, setProduct] = useState(productsArr);
  const [category, setCategory] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("همه");
  const [isFavouriteToastShow, setIsFavouriteToastShow] = useState(false)
  const [isBasketToastShow, setIsBasketToastShow] = useState(false)


  const filterMenus = (category) => {
    if (category === "همه") {
      setProduct(productsArr);
      return;
    }
    let filteredMenus = productsArr.filter((menu) => menu.category === category);
    setProduct(filteredMenus);
  };

  const shopToast = useRef()
  const favouriteToast = useRef()

  const addToFavouriteHandler = () => {
    setIsFavouriteToastShow(true)
    setTimeout(() => {
      setIsFavouriteToastShow(false)
    }, 2500);
    if (isBasketToastShow === true) {
      favouriteToast.current.style.top = "65px";
    } else {
      favouriteToast.current.style.top = "10px";
    }
  }

  const favoriteToastCloser = () => {
    setIsFavouriteToastShow(false)
  }

  const addToBasketHandler = () => {
    setIsBasketToastShow(true)
    setTimeout(() => {
      setIsBasketToastShow(false)
    }, 2500);
    if (isFavouriteToastShow === true) {
      shopToast.current.style.top = "65px";
    } else {
      shopToast.current.style.top = "10px";
    }
  }

  const basketToastCloser = () => {
    setIsBasketToastShow(false)
  }

  return (
    <div className={styles.productsContainer}>

      {/* toasts for add to favorite */}
      <div className={`${styles.toast} ${isFavouriteToastShow ? `${styles.toastActive}` : ''}`} ref={favouriteToast}>
        <p >محصول به مورد علاقه‌ها افزوده شد.</p>
        <button className={styles.closeBtn} onClick={favoriteToastCloser}>x</button>
      </div>
      {/* toasts for add to basket */}
      <div className={`${styles.toast} ${isBasketToastShow ? `${styles.toastActive}` : ''}`} ref={shopToast}>
        <p >محصول به سبد خرید افزوده شد.</p>
        <button className={styles.closeBtn} onClick={basketToastCloser}>x</button>
      </div>

      <div className={styles.productsHead}>
        <h4>محصولات ما</h4>
      </div>
      <div className={styles.productsCategories}>
        {category.map((categories, index) => (
          <button
            key={index}
            className={`${styles.productsCatBtn} ${categories === activeCategory ? `${styles.active}` : ""
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
              <div className={styles.btnContent} onClick={addToFavouriteHandler}>
                <CiHeart className={styles.btnIcon} />
              </div>
              <div className={styles.btnContent} onClick={addToBasketHandler}>
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
