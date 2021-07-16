import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  transition: opacity 0.15s linear;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  top: 100px;
  margin: 1.75rem auto;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 30px;
  z-index: 900;
  position: relative;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: 0;
  width: 700px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;

const StyledModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 20px;
`;

const StyledModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  border-top: 1px solid #e9ecef;
`;

const HeaderTitle = styled.h5`
  margin-bottom: 0;
  margin-top: 0;
  font-weight: bold;
  font-size: 20px;
  font-family: inherit;
  height: 30px;
`;

const HeaderHideButton = styled.button`
  background-color: transparent;
  border: 0;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
  }
`;

export const ModalFooter: React.FC = ({ children }) => {
  return <StyledModalFooter>{children}</StyledModalFooter>;
};

export const ModalBody: React.FC = ({ children }) => {
  return <StyledModalBody>{children}</StyledModalBody>;
};

type ModalHeaderProps = {
  onHideClick(): void;
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, onHideClick }) => {
  return (
    <StyledModalHeader>
      <HeaderTitle>{children}</HeaderTitle>
      <HeaderHideButton type="button" onClick={onHideClick}>
        <span>x</span>
      </HeaderHideButton>
    </StyledModalHeader>
  );
};

type Props = {
  onHideClick?(): void;
};

export const Modal: React.FC<Props> = ({ children }) => {
  return (
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};
