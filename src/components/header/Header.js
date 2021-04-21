import React from "react";
import styles from "./Styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo_container}>
        <h1>A.E</h1>
      </div>
      <div className={styles.navbar_container}>
        <div className={styles.navlinks_wrapper}>
          <h1>Home</h1>
          <h1>About me</h1>
          <h1>Portfolio</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
