import styles from "./header.module.css"
import logo from "../antools-logo.svg"
import { RiArrowDropDownLine } from "react-icons/ri"
import classNames from "classnames"

export default function Header() {
  return (
    <div className="container">
      <header className={styles.header}>
        <img src={logo} alt="Antools" />
        <nav className={styles.nav}>
          <a href="/" className={styles.link}>
            Home
          </a>
          <a href="/" className={classNames(styles.link, styles.dropdownLink)}>
            <span>Categories</span>
            <RiArrowDropDownLine className={styles.dropdownLinkIcon} />
          </a>
          <a href="/" className={styles.link}>
            My Collections
          </a>
          <a href="/" className={styles.link}>
            Blog
          </a>
        </nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          <a href="/" className={styles.link}>
            Login
          </a>
          <a href="/" className="btn">
            Sign Up
          </a>
        </div>
      </header>
    </div>
  )
}
