import { Navbar, NavbarBrand } from "reactstrap";
import styles from "./Nav.module.css";

const Nav = () => (
  <div className={`${styles.navbarContainer}`}>
    <Navbar className="px-4 py-0 h-100">
      <NavbarBrand>
        <h2 className="d-none d-md-block m-0">
          Splash<span className={`${styles.grandientSpan}`}>Photography</span>.
        </h2>
        <h2 className="d-sm-block d-md-none m-0">
          S<span className={`${styles.grandientSpan}`}>P</span>.
        </h2>
      </NavbarBrand>
    </Navbar>
  </div>
);

export default Nav;
