import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import classNames from 'classnames';

const SideBarContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: #fff;
  width: 200px;
  padding: 20px;
  flex-direction: column;
  box-shadow: 0 0.125em 0.5em rgb(0 0 0 / 15%);

  hr {
    height: 1px;
    margin: 10px 0;
    color: inherit;
    background-color: #6c757d;
    border: 0;
    opacity: 0.25;
  }
`;

const StyledSideBarMenuItem = styled.li`
  margin-bottom: 5px;
`;

const SideBarMenuLink = styled.div`
  cursor: pointer;
  background: 0 0;
  border: 0;
  border-radius: 0.25rem;
  color: #212529;
  display: flex;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  &.active {
    color: #fff;
    background-color: #20c997;
  }

  > span {
    font-size: 16px;
  }
`;

const StyledSideBarMenuHeader = styled.div`
  padding: 0 1rem;
`;

const StyledSideBarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  margin-bottom: auto;
`;

const SideBarMenuIcon = styled.svg<{ styles: { url?: string } }>`
  background-image: url(${props => props.styles?.url});
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  pointer-events: none;
  margin-right: 0.5rem;
  margin-top: 2px;
`;

type SideBarMenuItemProps = {
  pathTo: string;
  iconUrl: {
    default: string;
    active: string;
  };
};

const SideBarMenuItem: React.FC<SideBarMenuItemProps> = ({ pathTo, iconUrl, children }) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <StyledSideBarMenuItem>
      <SideBarMenuLink
        className={classNames({ active: location.pathname === pathTo })}
        onClick={() => history.push(pathTo)}
      >
        <SideBarMenuIcon styles={{ url: location.pathname === pathTo ? iconUrl.active : iconUrl.default }} />
        <span>{children}</span>
      </SideBarMenuLink>
    </StyledSideBarMenuItem>
  );
};

const SideBarMenu: React.FC = ({ children }) => {
  return <StyledSideBarMenu>{children}</StyledSideBarMenu>;
};

const SideBarHeader: React.FC = ({ children }) => {
  return (
    <>
      <StyledSideBarMenuHeader>{children}</StyledSideBarMenuHeader> <hr />
    </>
  );
};

type SideBarComponent = {
  Header: React.FC;
  Menu: React.FC;
  MenuItem: React.FC<SideBarMenuItemProps>;
};

const SideBar: React.FC & SideBarComponent = ({ children }) => {
  return <SideBarContainer>{children}</SideBarContainer>;
};

SideBar.Header = SideBarHeader;
SideBar.Menu = SideBarMenu;
SideBar.MenuItem = SideBarMenuItem;

export default SideBar;
