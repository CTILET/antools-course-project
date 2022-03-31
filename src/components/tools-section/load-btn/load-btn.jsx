import styles from "./load-btn.module.css";

export default function LoadBtn() {
  return (
    <div className={styles.btnOver}>
      <a href="/" className={styles.btn}>
        Load more
      </a>
    </div>
  );
}
