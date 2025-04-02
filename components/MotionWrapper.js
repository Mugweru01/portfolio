
// components/MotionWrapper.js
import { useState, useEffect } from 'react';

export default function MotionWrapper({ children, route }) {
  // Initially, use a fallback component that does nothing:
  const [MotionDiv, setMotionDiv] = useState(() => {
    // A simple fallback that just renders children
    return function Fallback({ children }) {
      return <>{children}</>;
    };
  });

  useEffect(() => {
    // This code runs only on the client.
    import('framer-motion')
      .then((mod) => {
        // mod.motion.div is the animated div component.
        setMotionDiv(() => mod.motion.div);
      })
      .catch((err) => {
        console.error('Error loading framer-motion:', err);
      });
  }, []);

  return (
    <MotionDiv
      key={route}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </MotionDiv>
  );
}
