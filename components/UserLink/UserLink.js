import Link from "next/link";
import styles from "./userlink.css";

export default function UserLink({ name, id }) {
  return (
    <Link href={`/user/${id}`}>
      <a className={`${styles.username}`}>{name}</a>
    </Link>
  );
}
