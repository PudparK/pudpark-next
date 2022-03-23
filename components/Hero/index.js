import React from "react";
import styles from "./styles.module.scss";

function Hero({ title }) {
  return (
    <div className={styles.HeroCover}>
      <h1 className={styles.header}>
        {title}
        <span>.</span>
      </h1>
    </div>
  );
}

export default Hero;
