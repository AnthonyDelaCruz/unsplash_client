import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaCameraRetro } from "react-icons/fa";
import CustomLink from "../../components/Link";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import styles from "./Nav.css";

const NavHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  return (
    <div className={`${styles.navbarContainer}`}>
      <Navbar
        className={`p-3 px-md-4 py-md-0 h-100 ${styles.navbar}`}
        expand="md"
      >
        <NavbarBrand>
          <h2 className="d-none d-md-block m-0">
            <Link href="/">
              <a className={styles.navHomeLink}>
                Splash
                <span className={`${styles.grandientSpan}`}>Photography</span>.
              </a>
            </Link>
          </h2>
          <h2 className="d-sm-block d-md-none m-0">
            S<span className={`${styles.grandientSpan}`}>P</span>.
          </h2>
        </NavbarBrand>
        <NavbarToggler style={{ outline: "none" }} onClick={toggle}>
          {!isOpen ? (
            <IoIosArrowRoundDown size="40px" style={{ color: "#ffffff" }} />
          ) : (
            <IoIosArrowRoundUp size="40px" style={{ color: "#ffffff" }} />
          )}
          <FaCameraRetro size="40px" style={{ color: "#ffffff" }} />
        </NavbarToggler>
        <Collapse className={styles.collapseContainer} isOpen={isOpen} navbar>
          <CustomLink
            customClassName={styles.navLinks}
            customActiveClassName={styles.active}
            link={{ href: "/", text: "Home" }}
            active={"/" === router.pathname}
          />
          <CustomLink
            customClassName={styles.navLinks}
            customActiveClassName={styles.active}
            link={{ href: "/collections", text: "Collections" }}
            active={"/collections" === router.pathname}
          />
          <CustomLink
            customClassName={styles.navLinks}
            customActiveClassName={styles.active}
            link={{ href: "/about", text: "About" }}
            active={"/about" === router.pathname}
          />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavHeader;
