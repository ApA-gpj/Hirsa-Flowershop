import React from 'react'
import styles from './Header.module.css'


const ShoppingCard = ({cardItems}) => {
    return (
        <div className={styles.ShoppingCard}>
            <p style={{ textAlign: 'center', borderBottom: '1px solid gray', paddingBottom: '5px' }}>لیست خرید</p>
                {cardItems.map((item) => (
                    <div key={item.id} className={styles.itemItem}>
                        {/* عکس محصول */}
                        <img src={item.image} alt={`تصویر ${item.name}`} />
                        {/* نام محصول */}
                        <span>{item.name}</span>
                        {/* قیمت محصول */}
                        <span>{item.price} تومان</span>
                    </div>
                ))}
        </div>
    )
}

export default ShoppingCard