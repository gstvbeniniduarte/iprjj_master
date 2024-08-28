import Link from "next/link";
import styles from "./footer.module.css";
import { socialMediaData } from "@/constants/Index";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={`${styles.container} grid`}>
        <li className={`${styles.col_span_2} grid`}>
          <span>IPR Jardim Jacarandá</span>

          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            molestias similique vero earum quo
          </span>
        </li>

        <li className="grid">
          <span>Mídias Sociais</span>

          <ul>
            {socialMediaData.map(({ route, ariaLabel, icon, label }) => (
              <li>
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
              </li>
            ))}
          </ul>
        </li>

        <li>
          <span>Outros</span>

          <ul>
            <li>Cultos</li>
            <li>Oração</li>
            <li>Ofertar</li>
          </ul>
        </li>
      </ul>

      <div className={styles.copyright}>
        Copyright &copy; 2024 - Desenvolvido por
        <Link
          href="https://whatsa.me/5567991456986"
          aria-label="Contato do desenvolvedor deste website"
          target="_blank"
          prefetch={false}
        >
          <span> Gustavo Benini</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
