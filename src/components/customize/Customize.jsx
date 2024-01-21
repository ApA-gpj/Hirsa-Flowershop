import React from "react";
import styles from "./Customize.module.css";
import BasicModal from "../modal/BasicModal";
import { FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { IoCall, IoMailOutline } from 'react-icons/io5';

const Customize = () => {
  return (
    <div className={styles.customizeContainer}>
      <div className={styles.cutomizeContentContainer}>
        <div className={styles.customizeHead}>
          <p className={styles.customizeHeadText}>
            دنبال گل‌های سفارشی به سلیقه خودت می‌گردی؟
          </p>
        </div>
        <div className={styles.customizeBody}>
          <h3 className={styles.customizeBodyText}>
            {" "}
            اون چیزی که میخواستی رو پیدا نکردی؟ دوست داری طرح دلخواهت رو سفارش
            بدی؟ فقط کافیه با ما تماس بگیری!
          </h3>
        </div>
        <div className={styles.customizeCall}>
          <BasicModal
            modalOpenerText={"راه‌های ارتباطی"}
            modalHeadText={"لطفا یکی از گزینه‌های زیر را انتخاب کنید ⬇ "}
            modalBodyText={
              <div className={styles.iconsContainer}>
                <a className={styles.socialMediaLink} rel='noopener noreffer' target='_blank' href='https://instagram.com/hirsaflowershop'> اینستاگرام <FaInstagram className={styles.callicon} /></a>
                <a className={styles.socialMediaLink} rel='noopener noreffer' target='_blank' href='https://telegram.me/hirsaflowershop'> تلگرام <FaTelegram className={styles.callicon} /></a>
                <a className={styles.socialMediaLink} rel='noopener noreffer' target='_blank' href='https://twitter.com/hirsaflowershop'> توییتر <FaTwitter className={styles.callicon} /></a>
                <a className={styles.socialMediaLink} rel='noopener noreffer' target='_blank' href='https://wa.me/+989999999999'> واتس‌‌اپ <FaWhatsapp className={styles.callicon} /></a>
                <a className={styles.socialMediaLink} href="mailto:hirsaflowershop@gmail.com">ایمیل <IoMailOutline className={styles.callicon} /></a>
                <a className={styles.socialMediaLink} href="tel:+989999999999">تماس <IoCall className={styles.callicon} /> </a>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Customize;
