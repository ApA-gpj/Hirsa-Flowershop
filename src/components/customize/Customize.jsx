import React from "react";
import styles from "./Customize.module.css";
import BasicModal from "../modal/BasicModal";
import { FaInstagram } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import { MdAddCall } from "react-icons/md";

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
                <a
                  href="https://instagram.com/HirsaFlowerShop"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FaInstagram className={styles.callicon} />
                </a>
                <a href="mailto:HirsaFlowershop@gmail.com">
                  <LuMailPlus className={styles.callicon} />
                </a>
                <a href="tel:+989302209897">
                  <MdAddCall className={styles.callicon} />
                </a>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Customize;
