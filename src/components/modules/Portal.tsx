import { createPortal } from 'react-dom';
import React from 'react';

const Portal: React.FC = ({ children }) => {
  const globalElement = document.getElementById('global-container');
  if (globalElement) {
    return createPortal(children, globalElement);
  }

  return <></>;
};

export default Portal;
