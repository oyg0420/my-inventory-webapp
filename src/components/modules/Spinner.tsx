import styled, { keyframes } from 'styled-components';
import React from 'react';

const SpinnerContainer = styled.div`
  position: fixed;
  z-index: 10000;
  text-align: center;
  padding-top: 25%;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.01);
`;

const spinnerGrow = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
  }
`;

const Loader = styled.div<{ delay: string }>`
  animation: ${spinnerGrow} 0.7s linear infinite;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  background-color: #17a2b8;
  border-radius: 50%;
  opacity: 0;
  animation-delay: ${props => props.delay};
`;

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Loader delay="0ms" />
      <Loader delay="250ms" />
      <Loader delay="500ms" />
    </SpinnerContainer>
  );
};

export default Spinner;
