import Link from "next/link";
import { useState } from "react";
import HamburgerButton from "../HamburgerButton";
import headerLinks from "./headerLinks.json";
import styles from "./styles.module.scss";
import logo from "./pk-development-large-bg-white.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHeader() {
    setIsOpen(!isOpen);
  }

  function toggleClose() {
    setIsOpen(false);
  }

  function getPageLinks() {
    const links = headerLinks.links;

    const linksMap = links.map((link, i) => {
      console.log("link:", link);
      if (link.type === "general") {
        return (
          <Link href={link.url}>
            <a
              className="noSelect text-2xl font-semibold block lg:inline-block mt-4 lg:mt-0 mr-4"
              activeClassName={styles.active}
              onClick={toggleClose}
            >
              {link.name}
            </a>
          </Link>
        );
      } else {
        return (
          <a
            className="noSelect inline-block text-2xl font-semibold px-4 py-2 leading-none border-2 rounded border-red hover:border-transparent bg-dark hover:bg-red hover:text-dark mt-4 lg:mt-0"
            href={link.url}
            onClick={toggleClose}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
          >
            {link.name}
          </a>
        );
      }
    });
    return linksMap;
  }

  let mobileClose = isOpen ? "" : " " + styles.mobileClose;

  return (
    <div className={styles.header + " px-0 text-red"}>
      <div className="container">
        <nav className="py-3 items-center justify-between flex-wrap flex">
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <a className="noSelect" onClick={toggleClose}>
                <img
                  className={styles.headerLogo}
                  src={logo}
                  alt="PudparK Developer"
                />
              </a>
            </Link>
          </div>
          <HamburgerButton onClick={toggleHeader} isOpen={isOpen} />
          <div
            className={
              styles.mobileMenu + " w-full block lg:w-auto" + mobileClose
            }
          >
            <div className="text-xl">{getPageLinks()}</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
