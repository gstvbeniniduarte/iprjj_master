import Link from "next/link";
import { FC, useMemo } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/Index";
import styles from "./navigation.module.css";

interface NavigationProps {
  variant: "desktop" | "mobile";
}

const Navigation: FC<NavigationProps> = ({ variant }) => {
  const pathname = usePathname();

  const filteredLinks = useMemo(() => {
    return navLinks.filter((link) => link.route !== pathname);
  }, [pathname]);

  return (
    <nav role="navigation" className={styles.nav}>
      <ul
        className={
          variant === "desktop" ? styles.desktopVariant : styles.mobileVariant
        }
      >
        {filteredLinks.map((link) => (
          <li key={link.route}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
