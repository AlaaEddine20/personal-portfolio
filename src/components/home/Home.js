import React from "react";
import styles from "./Styles.module.scss";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <h1>
        {"<"} Hi, I'm Alaa Eddine {"/>"}
      </h1>
      <h1>A Full stack developer</h1>
    </div>
  );
};

export default Home;
