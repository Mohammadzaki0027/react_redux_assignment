import React from "react";
import Filter from "../Components/Filter";

import MainMusic from "./MainMusic";
import styles from "../Styles/Music.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.filterapp}>
          <Filter></Filter>
        </div>
        <div className={styles.mapdiv}>
          <MainMusic></MainMusic>
        </div>
      </div>
    </>
  );
};

export default HomePage;
