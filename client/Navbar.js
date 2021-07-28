import React from 'react';
import styles from './Navbar.module.css';
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
        <a className={styles.link}>Home Placeholder</a>
        <a className={styles.link}>Try Your Own Placeholder</a>
      </div>
    </nav>
  );
};

export default Navbar;
