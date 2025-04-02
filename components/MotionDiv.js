
// components/MotionDiv.js
import dynamic from 'next/dynamic';

// If we're on the server, simply render children.
export default function MotionDiv({ children, route }) {
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }
  // Dynamically import the client-only MotionDivClient component.
  const MotionDivClient = dynamic(() => import('./MotionDivClient'), { ssr: false });
  return <MotionDivClient route={route}>{children}</MotionDivClient>;
}

