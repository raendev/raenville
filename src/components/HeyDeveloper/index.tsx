import React from 'react';

const HeyDeveloper: React.FC = ({ children }) => {
  return <div style={{
    padding: 'var(--spacing-l)',
    margin: 'var(--spacing-l) 0',
    borderRadius: 'var(--br-base)',
    fontFamily: 'var(--monospace)',
  }}>
    {children}
  </div>
}

export default HeyDeveloper;