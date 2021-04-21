import React from "react";
import { Link, NavLink } from "react-router-dom";
import classnames from "classnames";
import styles from "./Styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo_container}>
        <NavLink to="/">
          <h1>
            A<span>.</span>E
          </h1>
        </NavLink>
      </div>
      <div className={styles.navbar_container}>
        <div className={styles.navlinks_wrapper}>
          <Link className={styles.nav_btn} to="/about">
            <span className={styles.hover}>About me</span>
          </Link>
          <Link className={styles.nav_btn} to="skills">
            <span className={styles.hover}>Skills</span>
          </Link>
          <Link className={styles.nav_btn} to="/portfolio">
            <span className={styles.hover}>Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
