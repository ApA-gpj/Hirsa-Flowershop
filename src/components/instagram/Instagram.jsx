import React, { useState } from 'react';
import styles from './Instagram.module.css';
import { FaInstagram } from 'react-icons/fa';

const Instagram = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const imageArr = [
    { id: 1, imgSrc: 'https://preview.colorlib.com/theme/florist/img/instagram/insta-1.jpg.webp' },
    { id: 2, imgSrc: 'https://preview.colorlib.com/theme/florist/img/instagram/insta-2.jpg.webp' },
    { id: 3, imgSrc: 'https://preview.colorlib.com/theme/florist/img/instagram/insta-3.jpg.webp' },
    { id: 4, imgSrc: 'https://preview.colorlib.com/theme/florist/img/instagram/insta-4.jpg.webp' },
    { id: 5, imgSrc: 'https://preview.colorlib.com/theme/florist/img/instagram/insta-5.jpg.webp' },
  ]

  const hoverEnterHandler = (id) => {
    setHoveredId(id);
  };

  const hoverOutHandler = () => {
    setHoveredId(null);
  };

  return (
    <div className={styles.instagramContainer}>
      {imageArr.map((item) => (
        <div
          className={styles.imageContainer}
          key={item.id}
          onMouseEnter={() => hoverEnterHandler(item.id)}
          onMouseLeave={hoverOutHandler}
        >
          <img className={styles.images} src={item.imgSrc} alt='instagram address' />
          {hoveredId === item.id && (
            <div className={`${styles.iconOverlay} `}>
              <FaInstagram className={styles.igIcon} />
              <p className={styles.followText}>
                Follow us{' '}
                <a className={styles.followLink} href="http://instagram.com/hirsaflowershop" target="_blank" rel="noopener noreferrer">
                  @hirsaflowershop
                </a>
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Instagram;
