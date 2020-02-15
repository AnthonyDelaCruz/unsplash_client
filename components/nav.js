import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

const Nav = () => (
  <div className="navbarContainer">
    <Navbar className="w-100">
      <NavbarBrand>Capture!</NavbarBrand>
      <NavbarText>Nav text</NavbarText>
    </Navbar>
    <style jsx>
      {`
        .navbarContainer {
          height: 60px;
          position: sticky;
          top: 0;
          z-index: 1;
          background: #ffffff;
        }
      `}
    </style>
  </div>
);

export default Nav;
