import React from 'react';
import styled from 'styled-components';

import IconLogo from 'images/icon-logo.svg';
import NavigationBarLink from 'components/commons/NavigationBarLink';

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

export type LinkType = { path: string; label: string };

type Props = { links: LinkType[] };

const NavigationBar: React.FC<Props> = ({ links }) => {
  return (
    <NavigationBarContainer>
      <NavigationBarLogo />
      <NavigationBarLinkGroup>
        {links.map(link => (
          <NavigationBarLink to={link.path}>{link.label}</NavigationBarLink>
        ))}
      </NavigationBarLinkGroup>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
