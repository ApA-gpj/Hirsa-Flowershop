import React, { useContext } from 'react';
import styles from './Header.module.css';
import productsCtx from '../../contexts/productsCtx';
import { IoTrashBin } from "react-icons/io5";

const LikedProducts = () => {
    const productCtx = useContext(productsCtx)
    return (
        <div className={styles.LikedProducts}>
            <p style={{ textAlign: 'center' }}>کالاهای مورد علاقه</p>
            {productCtx.productData.map(product => (
                <div key={product.id} className={styles.productContainerHolder}>
                    <div className={styles.productContentHolder}>
                        <img src={product.imgSrc} alt={product.title} className={styles.productImage} />
                        <span>{product.title}</span>
                    </div>
                    <div className={styles.productContentHolder}>
                        <button className={styles.closeBtn}>
                            حذف
                            <IoTrashBin />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LikedProducts;
