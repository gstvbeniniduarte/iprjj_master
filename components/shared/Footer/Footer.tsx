import Link from "next/link";
import styles from "./footer.module.css";
import { infoData, socialMediaData } from "@/constants/Index";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={`${styles.wrapper} grid`}>
        <li className={`${styles.col_span_2} grid`}>
          <span>IPR Jardim Jacarandá</span>

          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            molestias similique vero earum quo
          </div>
        </li>

        <li className={`${styles.footer_topic} grid`}>
          <span>Mídias Sociais</span>

          <div className={`${styles.footer_item} grid`}>
            {socialMediaData.map(({ route, ariaLabel, icon, label }) => (
              <div>
                <Link
                  href={route}
                  className={`${styles.sm_container} flex`}
                  aria-label={ariaLabel}
                  target="_blank"
                  prefetch={false}
                >
                  {icon}
                  <span className="flex-aligned">{label}</span>
                </Link>
              </div>
            ))}
          </div>
        </li>

        <li className={`${styles.footer_topic} grid`}>
          <span>Informações</span>

          <div className={`${styles.footer_item} grid`}>
            {infoData.map(({ route, ariaLabel, icon, label }) => (
              <div>
                <Link
                  href={route}
                  className={`${styles.sm_container} flex`}
                  aria-label={ariaLabel}
                >
                  {icon}
                  <span className="flex-aligned">{label}</span>
                </Link>
              </div>
            ))}
          </div>
        </li>
      </ul>

      <div className={styles.copyright}>
        Copyright &copy; 2024 - IPR Jardim Jacarandá
      </div>
    </footer>
  );
};

export default Footer;
