import styles from "./hero.module.css";
import { FiSearch } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import classNames from "classnames";
import illustration from "./hero-illustration.svg";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          Awesome tools for <br /> Designer & Development
          <span className="highlight">.</span>
        </h1>
        <p className={styles.subtitle}>
          Antool is a web collection of information on paid or free Design and
          Development tools
        </p>
        <div className={styles.search}>
          <FiSearch className={styles.searchIcon} size={30} />
          <input type="text" placeholder="find more than 430+ tools..." />
          <a href="/" className="btn">
            Search
          </a>
        </div>
      </div>
      <div className={classNames(styles.socialIcons, "container")}>
        <ImFacebook className={styles.socialIcon} size={30} />
        <BsInstagram className={styles.socialIcon} size={30} />
        <BsTwitter className={styles.socialIcon} size={30} />
      </div>
      <img
        src={illustration}
        alt="Illustration"
        className={styles.illustration}
      />
    </div>
  );
}
