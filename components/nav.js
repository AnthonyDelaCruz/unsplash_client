import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

const Nav = () => (
  <div className="navbarContainer shadow">
    <Navbar className="px-4 py-0 h-100">
      <NavbarBrand>
        <h2 className="m-0">
          Splash<span className="grandient-span">Photography</span>.
        </h2>
      </NavbarBrand>
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
        .grandient-span {
          font-weight: bold;
          background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}
    </style>
  </div>
);

export default Nav;
