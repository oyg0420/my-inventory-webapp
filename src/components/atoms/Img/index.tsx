import React from 'react';
import styled from 'styled-components';

type ImageStyleProps = {
  styles?: {
    border?: string;
    borderRadius?: string;
  };
};

const Img = styled.img<ImageStyleProps>`
  ${props => props.styles?.border && `border: ${props.styles.border};`}
  ${props => props.styles?.borderRadius && `border-radius: ${props.styles.borderRadius};`}
`;

export default Img;
