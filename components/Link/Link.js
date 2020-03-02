import Link from "next/link";
import styles from "./Link.css";

export default function CustomLink({ link, active }) {
  return (
    <div className={`${styles.linkContainer}`}>
      <Link href={link.href}>
        <a
          className={`pb-2 font-weight-bold ${styles.linkItem} ${active &&
            styles.active}`}
        >
          {link.text}
        </a>
      </Link>
    </div>
  );
}
