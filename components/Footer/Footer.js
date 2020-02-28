import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div
      className={`${styles.footer} d-flex align-items-center justify-content-center`}
    >
      <p className="m-0">Copyright &copy; 2020</p>
    </div>
  );
}
