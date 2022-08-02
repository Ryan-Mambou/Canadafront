import React from 'react';
import styles from '../styles/infoBox.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function InfoBox({heading, content}) {

  const location = useLocation();

  return (
    <div className={styles.box}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.content}>{content}</p>
        {location.pathname === '/arrived' && 
        ( <div className={styles.links}> 
          <Link to=''>Universities</Link> 
          <Link to=''>Regions</Link> 
          <Link to=''>Residencies</Link>
        </div>)
        }
        {localStorage.getItem('isLoggedIn') !== 'true' && <Link className={styles.warning} to="/login">You need to Login to Continue</Link>}
    </div>
  )
}

export default InfoBox;