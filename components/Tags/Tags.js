import styles from "./tag.scss";

/**
 * @TODO
 * Make tag page and apply it to Link
 */
export default function Tag({ title }) {
  return (
    <button className={`btn btn-outline-primary mr-1 mb-1 ${styles.tagLink}`}>
      {title}
    </button>
  );
}
