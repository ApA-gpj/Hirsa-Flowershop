import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { IoCall, IoMailOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerUp}>
        <div className={styles.branches}>
          <p className={styles.branchesHead}>آدرس شعبه‌های ما:</p>
          <address className={styles.branchesAddress}>شعبه مرکزی: بندرعباس، سه راه فلانی، چهار راه بهمانی، گلسرای هیرسا</address>
          <address className={styles.branchesAddress}>شعبه دوم: تهران، امجدیه، سه راه فلانی، چهار راه بهمانی، گلسرای هیرسا</address>
        </div>
        <div className={styles.socialMedia}>
          <p className={styles.socialMediaHead} >با ما در ارتباط باشید</p>
          <div className={styles.socialMediaIconContainer}>
            <a className={styles.socialMediaLink} rel='noopener noreffer' target='_blank' href='https://instagram.com/hirsaflowershop'> اینستاگرام <FaInstagram className={styles.socialMediaIcon} /></a>
            <a className={styles.socialMediaLink} rel='noopener noreffer' target='_blank' href='https://telegram.me/hirsaflowershop'> تلگرام <FaTelegram className={styles.socialMediaIcon} /></a>
            <a className={styles.socialMediaLink} rel='noopener noreffer' target='_blank' href='https://twitter.com/hirsaflowershop'> توییتر <FaTwitter className={styles.socialMediaIcon} /></a>
            <a className={styles.socialMediaLink} rel='noopener noreffer' target='_blank' href='https://wa.me/+989999999999'> واتس‌‌اپ <FaWhatsapp className={styles.socialMediaIcon} /></a>
            <a className={styles.socialMediaLink} href="mailto:hirsaflowershop@gmail.com">ایمیل <IoMailOutline className={styles.socialMediaIcon} /></a>
            <a className={styles.socialMediaLink} href="tel:+989999999999">تماس <IoCall className={styles.socialMediaIcon} /> </a>
          </div>
        </div>
      </div>
      <div className={styles.footerDown}>
        <p className={styles.footerDownText}>Copyright ©2024 All rights reserved | This template is made with <span>❤</span> by ApA</p>
      </div>

    </div>
  )
}

export default Footer