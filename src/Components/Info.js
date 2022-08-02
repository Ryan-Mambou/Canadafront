import React from 'react';
import styles from '../styles/info.module.css';

function Info({image, heading, content}) {
  return (
    <div className={styles.box}>
        <div className={styles.left}>
            <img src={image} alt='Info' className={styles.image}/>
        </div>
        <div className={styles.right}>
            <h4 className={styles.heading}>{heading}</h4>
            <p className={styles.paragraph}>{content}</p>
        </div>
    </div>
  )
}

export default Info