import Image from "next/image";
import styles from "./notfound.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/images/catstruction.webp"
        alt="Site em construção"
        width={299}
        height={348}
      />
    </div>
  );
}
