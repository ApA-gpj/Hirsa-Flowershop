import React from "react";
import styles from "./Benefits.module.css";
import BenefitsCards from "./BenefitsCards";
import benefitsImg1 from "/src/assets/benefit-1.webp";
import benefitsImg2 from "/src/assets/benefit-2.webp";
import benefitsImg3 from "/src/assets/benefit-3.webp";
import benefitsImg4 from "/src/assets/benefit-4.webp";

const Benefits = () => {
  const boxesDetails = [
    {
      id: 1,
      imgSrc: benefitsImg1,
      textHead: "صد در صد تازگی",
      textTitle: "گل‌ها‌ی طبیعی و تازه، با بالاترین کیفیت و ماندگاری",
    },
    {
      id: 2,
      imgSrc: benefitsImg2,
      textHead: "طرح‌های جذاب و هنری",
      textTitle: "طرح‌های آماده توسط دستانی هنرمند ساخته شده‌اند",
    },
    {
      id: 3,
      imgSrc: benefitsImg3,
      textHead: "تحویل درب منزل",
      textTitle: "سفارش خود را با پیک اختصاصی درب منزل تحویل بگیرید",
    },
    {
      id: 4,
      imgSrc: benefitsImg4,
      textHead: "سفارش آنلاین",
      textTitle: "میتونید با استفاده از پلتفرم های ارتباطی ثبت سفارش کنید",
    },
  ];

  return (
    <div className={styles.benefitsContainer}>
      {boxesDetails.map((box) => (
        <BenefitsCards {...box} key={box.id} />
      ))}
    </div>
  );
};

export default Benefits;
