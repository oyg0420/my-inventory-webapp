import styled from 'styled-components';

type IconStyleProps = {
  url: string;
  width?: string;
  height?: string;
};

const Icon = styled.svg<IconStyleProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.url});
  background-size: ${props => props.width} ${props => props.height};
  background-repeat: no-repeat;
  background-position: center;
`;

export default Icon;
