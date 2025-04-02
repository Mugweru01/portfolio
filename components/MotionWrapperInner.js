
// components/MotionWrapperInner.js
import { motion } from 'framer-motion';

export default function MotionWrapperInner({ children, route }) {
  return (
    <motion.div
      key={route}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}