import React from 'react';
import styled from 'styled-components';

type ImageStyleProps = {
  styles?: {
    border?: string;
    borderRadius?: string;
    margin?: string;
    boxShadow?: string;
  };
};

const Img = styled.img<ImageStyleProps>`
  ${props => props.styles?.border && `border: ${props.styles.border};`}
  ${props => props.styles?.borderRadius && `border-radius: ${props.styles.borderRadius};`}
  ${props => props.styles?.margin && `margin: ${props.styles.margin};`}
  ${props => props.styles?.boxShadow && `box-shadow: ${props.styles.boxShadow};`}
`;

export default Img;
