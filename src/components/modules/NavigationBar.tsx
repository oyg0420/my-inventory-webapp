import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconLogo from 'images/icon-logo.svg';
import { LinkType } from './Layout';

export const NavigationBarLink = styled(Link)`
  color: #6c757d;

  &:active,
  &:hover {
    color: #343a40;
  }
`;

const NavigationBarLinkWrapper = styled.li``;

const NavigationBarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  width: 100%;
  background-color: #e3f2fd;
`;

const NavigationBarLogo = styled.svg`
  width: 100px;

  background-image: url(${IconLogo});
  background-size: 60px;
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;
`;

const NavigationBarLinkGroup = styled.ul`
  margin: 0;
`;

type Props = { links: LinkType[] };

const NavigationBar: React.FC<Props> = ({ links }) => {
  return (
    <NavigationBarContainer>
      <NavigationBarLogo />
      <NavigationBarLinkGroup>
        {links.map(link => (
          <NavigationBarLinkWrapper key={link.key}>
            <NavigationBarLink to={link.path}>{link.label}</NavigationBarLink>
          </NavigationBarLinkWrapper>
        ))}
      </NavigationBarLinkGroup>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
