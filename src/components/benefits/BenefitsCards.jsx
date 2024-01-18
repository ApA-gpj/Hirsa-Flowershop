import React from "react";
import styles from "./Benefits.module.css";

const BenefitsCards = ({ imgSrc, textHead, textTitle }) => {
  return (
    <div className={styles.boxContianer}>
      <div>
        <img src={imgSrc} alt="benefits-images" />
      </div>
      <div className={styles.textContent}>
        <h3>{textHead}</h3>
        <p>{textTitle}</p>
      </div>
    </div>
  );
};

export default BenefitsCards;
