import styled from 'styled-components';
import IconLogo from 'images/icon-logo.svg';

const BarLogo = styled.svg`
  width: 100px;

  background-image: url(${IconLogo});
  background-size: 60px;
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;
`;

export default BarLogo;
