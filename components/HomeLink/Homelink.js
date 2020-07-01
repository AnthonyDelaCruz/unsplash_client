import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import styles from "./homelink.scss";

export default function Homelink() {
  return (
    <div className="px-2 px-md-5 py-3">
      <Link href="/">
        <a className={`${styles.backToHome}`}>
          <IoIosArrowRoundBack size="1.875rem" />
          Back to Home
        </a>
      </Link>
    </div>
  );
}
