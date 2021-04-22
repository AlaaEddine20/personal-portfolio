import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Routes } from "./Routes";
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
          {Routes.map((route) => (
            <Link key={route.id} className={styles.nav_btn} to={route.path}>
              <span className={styles.hover}>{route.pageName}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
