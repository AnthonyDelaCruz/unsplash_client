import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { FaCameraRetro } from "react-icons/fa";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

import { useRouter } from "next/router";
import Link from "next/link";

import CustomLink from "components/Link";

const NavHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  return (
    <div className="navbarContainer">
      <Navbar className="p-3 px-md-4 py-md-0 h-100 navbar" expand="md">
        <NavbarBrand>
          <h2 className="d-none d-md-block m-0">
            <Link href="/">
              <a className="navHomeLink">
                Splash
                <span className="gradientSpan">Photography</span>.
              </a>
            </Link>
          </h2>
          <h2 className="d-sm-block d-md-none m-0">
            S<span className="gradientSpan">P</span>.
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
        <Collapse className="collapseContainer" isOpen={isOpen} navbar>
          <CustomLink
            customClassName="navLinks"
            customActiveClassName="active"
            link={{ href: "/", text: "Home" }}
            active={"/" === router.pathname}
          />
          <CustomLink
            customClassName="navLinks"
            customActiveClassName="active"
            link={{ href: "/collections", text: "Collections" }}
            active={"/collections" === router.pathname}
          />
          <CustomLink
            customClassName="navLinks"
            customActiveClassName="active"
            link={{ href: "/about", text: "About" }}
            active={"/about" === router.pathname}
          />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavHeader;
