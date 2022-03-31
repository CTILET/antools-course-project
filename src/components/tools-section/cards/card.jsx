import { AiOutlineFolderAdd } from "react-icons/ai"
import { TiHeartFullOutline } from "react-icons/ti"
import styles from "./card.module.css"
import classNames from "classnames"

export default function Card({ header, subHeader, info, logo, small }) {
  return (
    <div
      className={classNames(styles.card, {
        [styles.cardSmall]: small,
      })}
    >
      <div className={styles.cardInfo}>
        <div className={styles.cardHeader}>
          <img src={logo} alt="icon" />
          <div>
            <h4 className={styles.header}>{header}</h4>
            <h5 className={styles.subHeader}>{subHeader}</h5>
          </div>
        </div>
        <p className={styles.info}>{info}</p>
        <div className={styles.footer}>
          <div
            style={{
              display: "flex",
              width: "96px",
              height: "42px",
              alignItems: "center",
            }}
          >
            <div className={styles.iconCover}>
              <TiHeartFullOutline
                className={classNames(styles.icon, styles.heartIcon)}
              />
            </div>
            <div className={styles.iconCover}>
              <AiOutlineFolderAdd className={styles.icon} />
            </div>
          </div>
          <div className={styles.btnCover}>
            <a href="/" className={styles.btn}>
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
