import React from 'react';
import styles from './Header.module.css';

const LikedProducts = ({ likedProducts }) => {
    return (
        <div className={styles.LikedProducts}>
            <p style={{ textAlign: 'center', borderBottom: '1px solid gray', paddingBottom: '5px' }}>کالاهای مورد علاقه</p>
            {likedProducts.map(product => (
                <div key={product.id} className={styles.productContainer}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                    <span className={styles.productName}>{product.name}</span>
                    <span className={styles.productPrice}>{product.price} تومان</span>
                </div>
            ))}
        </div>
    );
}

export default LikedProducts;
