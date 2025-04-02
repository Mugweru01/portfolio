
// components/ClientSideTransition.js
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ClientSideTransition({ children, router }) {
  // Delay rendering of motion code until after the component mounts
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Until mounted, simply render children without animations.
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
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

