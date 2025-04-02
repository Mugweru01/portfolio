
// components/PageTransition.js
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRef } from 'react';

export default function PageTransition({ children, route }) {
  const nodeRef = useRef(null);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={route}
        nodeRef={nodeRef}
        classNames="page"
        timeout={300}
      >
        <div ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}