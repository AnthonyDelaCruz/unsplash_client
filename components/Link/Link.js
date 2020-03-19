import Link from "next/link";
import styles from "./Link.css";

export default function CustomLink({
  link,
  active,
  customClassName,
  customActiveClassName
}) {
  return (
    <div className={`${styles.linkContainer} ${customClassName}`}>
      <Link href={link.href}>
        <a
          className={`pb-2 font-weight-bold 
            ${styles.linkItem} 
            ${!customActiveClassName && active && styles.active}
            ${active && customActiveClassName}`}
        >
          {link.text}
        </a>
      </Link>
    </div>
  );
}
