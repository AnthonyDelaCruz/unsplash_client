import { motion } from "framer-motion";
import Nav from "./nav";
import Sidebar from "./Sidebar";

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Sidebar customClassName="col-md-3 d-none d-md-flex flex-column justify-content-around" />
          <div className="col-md-9 col-sm-12 p-0">
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={pageVariants}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
