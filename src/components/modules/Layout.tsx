import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Spinner from './Spinner';
import selectSpinner from 'modules/spinner/selector';
import SideBar from './SideBar';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledLayoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fff;
  position: relative;
`;

export const StyledLayoutMain = styled.main`
  height: calc(100% - 28px);
  flex: 1;
  overflow: hidden;
  display: flex;
  padding-top: 28px;
`;

export const StyledLayoutSection = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledLayoutContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const LayoutBody: React.FC = ({ children }) => {
  return (
    <StyledLayoutMain>
      <StyledLayoutSection>{children}</StyledLayoutSection>
    </StyledLayoutMain>
  );
};

export const LayoutHaeder: React.FC = ({ children }) => {
  return <StyledLayoutHeader>{children}</StyledLayoutHeader>;
};

export const LayoutContent: React.FC = ({ children }) => {
  return <StyledLayoutContent>{children}</StyledLayoutContent>;
};

export type LinkType = { path: string; label: string; key: string };

type LayoutComponent = {
  Header: React.FC;
  Content: React.FC;
  SideBar: React.FC;
  Body: React.FC;
};

const Layout: React.FC & LayoutComponent = ({ children }) => {
  const show = useSelector(selectSpinner.show);
  return (
    <LayoutContainer>
      {show && <Spinner />}
      {children}
    </LayoutContainer>
  );
};

Layout.Header = LayoutHaeder;
Layout.Content = LayoutContent;
Layout.SideBar = SideBar;
Layout.Body = LayoutBody;

export default Layout;
