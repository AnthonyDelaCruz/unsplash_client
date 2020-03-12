import MotionDiv from "../MotionDiv";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

import { fadeIn } from "../../utils/animations";
import styles from "./Layout.css";

export default function Layout({
  children,
  withOutSidebar = false,
  withOutFooter = false
}) {
  return (
    <div className="h-100">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          {!withOutSidebar && (
            <Sidebar
              customClassName={`${!withOutSidebar &&
                "col-md-3"} d-none d-md-flex flex-column justify-content-around`}
            />
          )}
          <div
            className={`${withOutSidebar ? "col-md-12" : "col-md-9"} ${
              styles.motionDiv
            } col-sm-12 p-0 h-100`}
          >
            <MotionDiv variants={fadeIn} className="h-100">
              {children}
              {!withOutFooter && <Footer />}
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
