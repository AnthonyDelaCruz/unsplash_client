import { motion } from "framer-motion";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

import styles from "./Layout.module.css";

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

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
            } col-sm-12 p-0`}
          >
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={pageVariants}
              className="h-100"
            >
              {children}
              {!withOutFooter && <Footer />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
