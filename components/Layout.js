import Nav from "./nav";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Sidebar customClassName="col-md-3 d-none d-md-flex flex-column justify-content-around" />
          <div className="col-md-9 col-sm-12 p-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
