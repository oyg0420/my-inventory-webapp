import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavigationBarLink = styled(Link)`
  color: #6c757d;

  &:active,
  &:hover {
    color: #343a40;
  }
`;

const StyledNavigationBarMenuItem = styled.li``;

const NavigationBarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  width: 100%;
`;

const StyledNavigationBarMenu = styled.ul`
  margin: 0;
`;

type NavitionBarMenuLinkProps = { path: string };

type NavigationBarComponent = {
  Menu: React.FC;
  Item: React.FC;
  Link: React.FC<NavitionBarMenuLinkProps>;
};

const NavitionBarMenuLink: React.FC<NavitionBarMenuLinkProps> = ({ path, children }) => {
  return <StyledNavigationBarLink to={path}>{children}</StyledNavigationBarLink>;
};

const NavitionBarMenuItem: React.FC = ({ children }) => {
  return <StyledNavigationBarMenuItem>{children}</StyledNavigationBarMenuItem>;
};

const NavigationBarMenu: React.FC = ({ children }) => {
  return <StyledNavigationBarMenu>{children}</StyledNavigationBarMenu>;
};

const NavigationBar: React.FC & NavigationBarComponent = ({ children }) => {
  return <NavigationBarContainer>{children}</NavigationBarContainer>;
};

NavigationBar.Menu = NavigationBarMenu;
NavigationBar.Item = NavitionBarMenuItem;
NavigationBar.Link = NavitionBarMenuLink;

export default NavigationBar;
