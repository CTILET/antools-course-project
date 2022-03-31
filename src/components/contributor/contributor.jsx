import React from "react"
import styles from "./contributor.module.css"

const contributor = () => {
  return (
    <section className={styles.ContributerSection}>
      <div className="container">
        <div className={styles.title}>
          <h1>Become a contributor?</h1>
        </div>
        <div className={styles.subtitle}>
          <p>
            Join us and get tips & tricks to become a great Designer and
            Developer
          </p>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Enter your email..." />
          <a href="/" className={styles.btn}>
            Join Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default contributor
