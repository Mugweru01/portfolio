
// components/ClientMotionWrapper.js
import React, { Suspense } from 'react';

// Lazy-load the inner motion wrapper (which uses Framer Motion)
const MotionWrapperInner = React.lazy(() =>
  import('./MotionWrapperInner')
);

export default function ClientMotionWrapper({ children, route }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <MotionWrapperInner route={route}>
        {children}
      </MotionWrapperInner>
    </Suspense>
  );
}

