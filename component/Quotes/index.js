import React, { useEffect, useState } from "react";
import fetchData from "../../util/netReq";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Quotes = () => {
  const [data, setData] = useState(null);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    fetchData("/.netlify/functions/api/airtable").then((fetchedData) => {
      console.log("fetchedData:", fetchedData);
      setData(fetchedData);
    });
  }, []);

  return (
    <blockquote
      key={currentQuote}
      className={classNames("w-1/2 text-4xl lg:text-5xl leading-none", {
        [styles.phaseIn]: transition,
        [styles.phaseOut]: !transition,
      })}
      onAnimationEnd={(e) => {
        setTransition(!transition);
        data &&
          !transition &&
          setCurrentQuote((currentQuote + 1) % data.records.length);
      }}
    >
      {data?.records[currentQuote].fields.Quote}
    </blockquote>
  );
};

export default Quotes;
