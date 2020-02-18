import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

const Nav = () => (
  <div className="navbarContainer shadow">
    <Navbar className="navbarComponent px-4 py-0 h-100">
      <NavbarBrand>
        <h2 className="m-0">SPASHimg</h2>
      </NavbarBrand>
      <NavbarText>Nav Text</NavbarText>
    </Navbar>
    <style jsx>
      {`
        .navbarContainer {
          color: #ffffff;
          height: 60px;
          position: sticky;
          top: 0;
          z-index: 1;
          background: #262626;
        }
      `}
    </style>
  </div>
);

export default Nav;
