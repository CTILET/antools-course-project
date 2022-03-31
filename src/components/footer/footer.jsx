import styles from "./footer.module.css"
import logo from "../antools-logo.svg"

export default function Footer() {
  return (
    <section>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.firstSection}>
            <div className={styles.titleWrap}>
              <img src={logo} alt="Antools" />
              <h5 className={styles.fistTitle}>Copyright 2021. Antools</h5>
              <div className={styles.infoWrap}>
                <p className={styles.info}>
                  Antool is a web collection of information on paid or free
                  Design and Development tools
                </p>
              </div>
            </div>
          </div>
          <div className={styles.lastSection}>
            <div className={styles.contact}>
              <h4>Contact Us</h4>
              <p>+99890 973 11 70</p>
              <p>M Building, No.10 A</p>
              <p>antools@awesome.com</p>
            </div>
            <div className={styles.categories}>
              <h4>Categories</h4>
              <p>Design</p>
              <p>Development</p>
            </div>
            <div className={styles.companyInfo}>
              <h4>Company Info</h4>
              <p>About Us</p>
              <p>Our Partners</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
