import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.preloader}>
      <div className={styles.ring}></div>
      <p className={styles.text}>aguarde</p>
    </div>
  );
}
