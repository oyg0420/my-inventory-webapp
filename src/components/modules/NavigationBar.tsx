import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LinkType } from './Layout';
import BarLogo from 'components/atoms/BarLogo';

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

const NavigationBarLinkGroup = styled.ul`
  margin: 0;
`;

type Props = { links: LinkType[] };

const NavigationBar: React.FC<Props> = ({ links }) => {
  return (
    <NavigationBarContainer>
      <BarLogo />
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
