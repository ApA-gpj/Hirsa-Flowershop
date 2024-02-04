import React, { useContext } from 'react'
import styles from './Header.module.css'
import productsCtx from '../../contexts/productsCtx';
import { IoTrashBin } from "react-icons/io5";


const ShoppingCard = () => {
    const productCtx = useContext(productsCtx)

    return (
        <div className={styles.ShoppingCard}>
            <p style={{ textAlign: 'center' }}>لیست خرید</p>
            {productCtx.productData.map((item) => (
                <div key={item.id} className={styles.productContainerHolder}>
                    <div className={styles.productContentHolder}>
                        <img src={item.imgSrc} alt={`تصویر ${item.title}`} className={styles.productImage} />
                        <span>{item.title}</span>
                    </div>
                    <div className={styles.productContentHolder}>
                        <span>{item.price.toLocaleString()} تومان</span>
                        <button className={styles.closeBtn}>
                            حذف
                            <IoTrashBin />
                        </button>
                    </div>
                </div>
            ))}
            <div className={styles.totalProductsPrice}>
                <span>جمع سبد خرید:</span>
                <span> تومان</span>
            </div>
        </div>
    )
}

export default ShoppingCard