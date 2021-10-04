import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
//import link here after router set up

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.titleContainer}>
        <h1>Emotion Analyzer</h1>
      </div>
      <div className={styles.linkContainer}>
        {/* link to home
        link to try your own text */}
        <Link to='/' className={styles.link}>
          Home
        </Link>
        <Link to='/tryyourown' className={styles.link}>
          Try Your Own Placeholder
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
