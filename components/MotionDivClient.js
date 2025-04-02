
// components/MotionDivClient.js
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MotionDivClient({ children, route }) {
  // Use local state to delay rendering AnimatePresence until after mount
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    // While mounting, simply render children without any animation
    return <>{children}</>;
  }
  
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={route}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
