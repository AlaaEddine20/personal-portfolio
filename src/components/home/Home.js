import { Box, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Styles.module.scss";

const Home = () => {
  return (
    <Box className={styles.home_container}>
      <Typography variant="h3">
        {"<"} Hi, I'm Alaa Eddine {"/>"}
      </Typography>
      <Typography variant="h4">A Full stack developer</Typography>
    </Box>
  );
};

export default Home;
