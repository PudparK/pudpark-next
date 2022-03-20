import React from "react";
import styles from "./styles.modules.css";

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        styles.button +
        "noSelect inline-block text-2xl font-semibold px-4 py-2 leading-none border-2 rounded border-red hover:border-transparent hover:bg-red hover:text-black mt-4 lg:mt-0 text-red transition-hover:text-black duration-500 ease-in-out"
      }
    >
      {text}
    </button>
  );
}

export default Button;
