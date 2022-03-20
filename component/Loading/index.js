import React from "react";

import styles from "./styles.module.scss";

function Loading() {
  return (
    <div className="flex min-h-full justify-center items-center">
      <h1 className={styles.bigCursor + " font-bold text-xl lg:text-4xl"}>
        Loading slowly on purpose...
      </h1>
    </div>
  );
}

export default Loading;
