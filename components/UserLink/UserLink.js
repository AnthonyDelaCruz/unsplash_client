import Link from "next/link";
import styles from "./userlink.css";

export default function UserLink({ name, username, customClassName }) {
  return (
    <Link href={`/user/${username}`} as={`/user/${username}`}>
      <a className={`${styles.username} ${customClassName}`}>{name}</a>
    </Link>
  );
}
