import React from 'react';
import {SpinningCircles} from 'react-loading-icons'

const LoadingModal = () => {
  return (
    <div className="loading-modal">
      <div className="loading-background" />
      <div className="loader"></div>
    </div>
  );
};

export default LoadingModal;
