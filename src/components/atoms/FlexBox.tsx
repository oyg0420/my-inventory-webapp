import styled from 'styled-components';

type Props = {
  styles?: {
    flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    justifyContent?: 'start' | 'end' | 'center' | 'flex-start' | 'flex-end' | 'left' | 'right';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    margin?: string;
    flex?: number;
    height?: string;
    width?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
  };
};

const FlexBox = styled.div<Props>`
  display: flex;
  ${props => props.styles?.flexDirection && `flex-direction: ${props.styles.flexDirection};`}
  ${props => props.styles?.justifyContent && `justify-content: ${props.styles.justifyContent};`}
  ${props => props.styles?.alignItems && `align-items: ${props.styles.alignItems};`}
  ${props => props.styles?.margin && `margin: ${props.styles.margin};`}
  ${props => props.styles?.flex && `flex: ${props.styles.flex};`}
  ${props => props.styles?.height && `height: ${props.styles.height};`}
  ${props => props.styles?.width && `width: ${props.styles.width};`}
  ${props => props.styles?.padding && `padding: ${props.styles.padding};`}
  ${props => props.styles?.border && `border: ${props.styles.border};`}
  ${props => props.styles?.borderRadius && `border-radius: ${props.styles.borderRadius};`}
  ${props => props.styles?.boxShadow && `boxshadow: ${props.styles.boxShadow};`}
`;

export default FlexBox;
