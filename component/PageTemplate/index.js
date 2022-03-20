import React from "react";
import styles from "./styles.module.scss";

// Components
import Hero from "../../component/Hero";

function PageTemplate({ children, title }) {
  return (
    <div className="sub-container">
      <div className={styles.headerContent}>
        <Hero title={title} />
      </div>
      <div className={styles.mainContent}>{children}</div>
    </div>
  );
}
export default PageTemplate;
