import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo_container}>
        <NavLink to="/">
          <h1>A.E</h1>
        </NavLink>
      </div>
      <div className={styles.navbar_container}>
        <div className={styles.navlinks_wrapper}>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <h1>About me</h1>
          </NavLink>
          <NavLink to="skills">
            <h1>Skills</h1>
          </NavLink>
          <NavLink to="/portfolio">
            <h1>Portfolio</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
