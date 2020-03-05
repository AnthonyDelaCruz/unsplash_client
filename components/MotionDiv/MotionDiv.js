import { motion } from "framer-motion";

export default function MotionDiv({ children, variants, ...props }) {
  return (
    <motion.div
      {...props}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
