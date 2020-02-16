import Nav from "./nav";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className="row">
        <Sidebar customClassName="col-md-3 d-none d-md-block" />
        <div className="hero w-100 col-md-9 col-sm-12 p-0">{children}</div>
      </div>
    </div>
  );
}
