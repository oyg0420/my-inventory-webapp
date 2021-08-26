import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import Spinner from './Spinner';
import selectSpinner from 'modules/spinner/selector';
import SideBar from './SideBar';
import IconBasketWhite from 'images/icon-basket-white.svg';
import IconBasket from 'images/icon-basket.svg';

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

const LayoutContent = styled.div`
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

export type LinkType = { path: string; label: string; key: string };

type Props = {
  links?: LinkType[];
};

const Layout: React.FC<Props> = ({ links, children }) => {
  const show = useSelector(selectSpinner.show);
  return (
    <LayoutContainer>
      {show && <Spinner />}
      <LayoutHaeder>
        <NavigationBar links={links} />
      </LayoutHaeder>
      <LayoutContent>
        <SideBar>
          <SideBar.Header>헤더</SideBar.Header>
          <SideBar.Menu>
            <SideBar.MenuItem pathTo="/keywords" iconUrl={{ default: IconBasket, active: IconBasketWhite }}>
              쇼핑 키워드
            </SideBar.MenuItem>
            <SideBar.MenuItem pathTo="/relKeywords" iconUrl={{ default: IconBasket, active: IconBasketWhite }}>
              연관 키워드
            </SideBar.MenuItem>
          </SideBar.Menu>
        </SideBar>
        <LayoutBody>{children}</LayoutBody>
      </LayoutContent>
    </LayoutContainer>
  );
};

export default Layout;
