import { FC } from "react";
import styles from "./mobileNav.module.css";
import Navigation from "../Navigation/Navigation";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ isOpen, onToggle }) => (
  <>
    <button
      className={styles.nav_toggler}
      aria-expanded={isOpen}
      aria-controls="primary-navigation"
      aria-label="Abrir/fechar menu de navegação"
      onClick={onToggle}
      data-state={isOpen ? "open" : "closed"}
    >
      <svg
        stroke="var(--stroke-clr)"
        className={styles.open_close_nav}
        aria-hidden="true"
        viewBox="0 0 100 100"
      >
        <line
          className={`${styles.line} ${styles.top}`}
          x1="90"
          x2="10"
          y1="40"
          y2="40"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="80"
          strokeDashoffset="0"
        />
        <line
          className={`${styles.line} ${styles.bottom}`}
          x1="10"
          x2="90"
          y1="60"
          y2="60"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="80"
          strokeDashoffset="0"
        />
      </svg>
    </button>

    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
      aria-hidden={!isOpen}
    >
      <div className={styles.wrapper}>
        <Navigation variant="mobile" />
      </div>
    </div>

    {isOpen && <div className={styles.overlay} onClick={onToggle}></div>}
  </>
);

export default MobileNav;
