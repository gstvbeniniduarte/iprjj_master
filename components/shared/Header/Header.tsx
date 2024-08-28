import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./header.module.css";
const MobileNav = dynamic(() => import("../MobileNav/MobileNav"));
const Navigation = dynamic(() => import("../Navigation/Navigation"));

interface HeaderProps {
  isActive: boolean;
  isHidden: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const Header: FC<HeaderProps> = ({ isActive, isHidden, isOpen, onToggle }) => {
  return (
    <header
      className={`${styles.header} ${isActive ? styles.active : ""} ${isHidden ? styles.hide : ""}`}
    >
      <div className={`${styles.container} flex-aligned `}>
        <Link
          className={`${styles.logo} flex-aligned`}
          href="/"
          aria-label="Voltar à página inicial"
        >
          <Image
            className={styles.logo_img}
            src="/assets/images/Icons/logo.svg"
            height={28}
            width={28}
            priority
            alt="Logo da Igreja Presbiteriana Renovada"
            sizes="28px"
          />
          <span>6ª IPR</span>
        </Link>
        <Navigation variant="desktop" />
        <MobileNav isOpen={isOpen} onToggle={onToggle} />
      </div>
    </header>
  );
};

export default Header;
