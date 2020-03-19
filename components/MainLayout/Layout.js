import MotionDiv from "../MotionDiv";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

import { fadeIn } from "../../utils/animations";
import styles from "./Layout.css";

export default function Layout({
  children,
  withOutSidebar = false,
  withOutFooter = false,
  withOutSidebarComingSoon
}) {
  return (
    <div className="h-100">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          {!withOutSidebar && (
            <Sidebar
              customClassName={`
              d-none d-md-flex flex-column justify-content-around
              ${!withOutSidebar && "col-md-3"}
                `}
            />
          )}
          <div
            className={`col-sm-12 p-0 
            ${withOutSidebar ? "col-md-12" : "col-md-9"}
            ${withOutSidebarComingSoon && styles.withOutSidebarContainer}
            ${styles.motionDiv}`}
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
