import Link from "next/link";
import styles from "./home.module.scss";
import Quotes from "../components/Quotes";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="sub-container h-screen flex flex-col justify-center">
        <h3 className="text-base font-bold relative lg:text-xl cursor">
          HELLO WORLD
        </h3>
        <h1 className="text-red text-5xl sm:text-6xl font-bold">Paul Barrón</h1>
        <p className="lg:w-3/4 text-3xl sm:text-5xl font-black leading-tight mb-6">
          I started out building <span className="hCallout">HTML</span> moved on
          to <span className="hCallout">CSS</span> and now I&apos;m controlling
          the two w/
          <span className="hCallout"> JS</span>.
        </p>

        <div className={styles.homeHeading}>
          <ul className="flex flex-wrap items-center text-3xl lg:text-4xl">
            <li className="block sm:inline-block">
              <Link href="/projects">
                <a className="leading-none text-2xl block text-center sm:inline-block font-semibold px-4 py-2 border-2 rounded border-red text-red hover:border-transparent hover:bg-red hover:text-black noSelect">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <a className="noSelect-icon" href="https://twitter.com/Paul__132">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                className="noSelect-icon"
                href="https://www.linkedin.com/in/paul-barron"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                className="noSelect-icon"
                href="https://www.twitch.tv/pudpark36"
              >
                <FontAwesomeIcon icon={faTwitch} />
              </a>
            </li>
            <li>
              <a
                className="noSelect-icon"
                href="https://www.youtube.com/channel/UCYZ0t_lWDlbdLVonbqpOg4g"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={classNames(
          "sub-container flex flex-col justify-center",
          styles.bioPic
        )}
      >
        <div className={styles.quoteContainer}>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="2x"
            className={styles.quotes}
          />
          <Quotes />
        </div>
      </div>
    </>
  );
};
export default Home;
