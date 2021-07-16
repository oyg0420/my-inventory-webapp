import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationBarLinkWrapper = styled.li``;

const StyledLink = styled(Link)`
  color: #6c757d;

  &:active,
  &:hover {
    color: #343a40;
  }
`;

type Props = { to: string };

const NavigationBarLink: React.FC<Props> = ({ to, children }) => {
  return (
    <NavigationBarLinkWrapper>
      <StyledLink to={to}>{children}</StyledLink>
    </NavigationBarLinkWrapper>
  );
};

export default NavigationBarLink;
