import React from "react";
import styles from "./styles.module.scss";

function Sidebar() {
  return (
    <div
      className={styles.sidebar + " flex flex-col items-center hidden lg:flex"}
    >
      <div className={styles.content}></div>
    </div>
  );
}

export default Sidebar;
