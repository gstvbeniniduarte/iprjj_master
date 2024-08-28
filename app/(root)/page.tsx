import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        <Image
          className={`${styles.hero_img} .overlay`}
          src="/assets/images/hero-slider-1.avif"
          alt="Banner IPR"
          width={1200}
          height={851}
          priority
        />
        <div className={`${styles.content} page-width`}>
          <h1 className={styles.hero_title}>
            Lorem Ipsum Dolor Sit Amet Consectetur
          </h1>
          <p className={styles.hero_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            recusandae dolor suscipit iste placeat itaque deleniti!
          </p>
        </div>
      </div>
    </section>
  );
}
