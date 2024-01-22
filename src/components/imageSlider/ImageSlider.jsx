import React, { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";
import sliderImg1 from "../../assets/hero1.jpg";
import sliderImg2 from "../../assets/hero2.jpg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [sliderImg1, sliderImg2];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  const shopHandler = () => {
    window.scrollTo({
      top: 1300,
      behavior: "smooth"
    });
  }

  return (
    <div className={styles.imageSlider}>
      {/* image container */}
      <div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: "100%" }}
        />
      </div>

      {/* text container */}
      <div className={styles.textContainer}>
        <p className={styles.textHead}>گل‌های تازه، هدیه‌هایی جذاب</p>
        <h2 className={styles.textTitle}>گل‌های زیبا را بخشی از زندگی خود کنید</h2>
        <button className={styles.textBtn} onClick={shopHandler}>خرید</button>
      </div>

      {/* button container */}
      <div className={styles.buttonContainer}>
        <button
          onClick={handlePrev}
          className={`${styles.btn} ${
            currentIndex === 1 ? `${styles.active}` : ""
          }`}
        ></button>
        <button
          onClick={handleNext}
          className={`${styles.btn}  ${
            currentIndex === 0 ? `${styles.active}` : ""
          }`}
        ></button>
      </div>
    </div>
  );
};

export default ImageSlider;
