import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';

const LayoutContainer = styled.div`
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
  height: 100%;
  overflow: hidden;
  display: flex;
`;

export const StyledLayoutSection = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
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

export type LinkType = { path: string; label: string; key: string };

type Props = {
  links: LinkType[];
};

const Layout: React.FC<Props> = ({ links, children }) => {
  return (
    <LayoutContainer>
      <LayoutHaeder>
        <NavigationBar links={links} />
      </LayoutHaeder>
      <LayoutBody>{children}</LayoutBody>
    </LayoutContainer>
  );
};

export default Layout;
