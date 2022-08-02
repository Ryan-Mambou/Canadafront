import React from 'react';
import styles from '../styles/search.module.css';
import { FaSearch } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import {
  Tooltip,
} from 'react-tippy';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Search() {

  const navigate = useNavigate();

  const logOut = () => {
    /**axios.get('http://localhost:3000/api/auth/logout')
    .then(res => {
      console.log(res)
    }) 
    .catch(error => console.log(error))*/
    navigate('/login')
    localStorage.setItem('isLoggedIn', 'false')
  }

  return (
    <div className={styles.box}>
      <div style={{position: 'relative'}}>
        <input type='text' placeholder='Search ...' className={styles.search} />
        <FaSearch className={styles.icon}/>
        </div>
        <div className={styles.login}>
            { localStorage.getItem('isLoggedIn') !==  'true' && (<>
              <Link type='submit' to='/login' className={styles.button}>Login</Link>
              <Link type='submit' to='/signup' className={styles.button}>Register</Link>
              </>) }
            <select className={styles.select}>
              <option className={styles.option_english}>EN</option>
              <option className={styles.option_french}>FR</option>
            </select>
            {localStorage.getItem('isLoggedIn') ===  'true' && 
            <Tooltip title='logout' 
            position='bottom' animation='fade'
            style={{borderRadius: '5px'}}
            trigger='mouseenter'><MdOutlineLogout className={styles.logout} onClick={logOut}/>
            </Tooltip>}
        </div>
    </div>
  )
}

export default Search;