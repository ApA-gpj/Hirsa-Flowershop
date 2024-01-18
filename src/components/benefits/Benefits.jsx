import React from "react";
import styles from "./Benefits.module.css";
import BenefitsCards from "./BenefitsCards";

const Benefits = () => {

  const boxesDetails = [
    {
      id: 1,
      imgSrc: "/src/assets/benefit-1.webp",
      textHead: "صد در صد تازگی",
      textTitle: "گل‌ها‌ی طبیعی و تازه، با بالاترین کیفیت و ماندگاری",
    },
    {
      id: 2,
      imgSrc: "/src/assets/benefit-2.webp",
      textHead: "طرح‌های جذاب و هنری",
      textTitle: "طرح‌های آماده توسط دستانی هنرمند ساخته شده‌اند",
    },
    {
      id: 3,
      imgSrc: "/src/assets/benefit-3.webp",
      textHead: "تحویل درب منزل",
      textTitle: "سفارش خود را با پیک اختصاصی درب منزل تحویل بگیرید",
    },
    {
      id: 4,
      imgSrc: "/src/assets/benefit-4.webp",
      textHead: "سفارش آنلاین",
      textTitle: "میتونید با استفاده از پلتفرم های ارتباطی ثبت سفارش کنید",
    },
  ];

  return (
    <div className={styles.benefitsContainer}>
      {boxesDetails.map((box) => (
        <BenefitsCards {...box} key={box.id}/>
      ))}
    </div>
  );
};

export default Benefits;