import styled from 'styled-components';

type Props = {
  styles?: {
    flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    justifyContent?: 'start' | 'end' | 'center' | 'flex-start' | 'flex-end' | 'left' | 'right';
    alignItem?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    margin?: string;
    flex?: number;
  };
};

const FlexBox = styled.div<Props>`
  display: flex;
  ${props => props.styles?.flexDirection && `flex-direction: ${props.styles.flexDirection};`}
  ${props => props.styles?.justifyContent && `justify-content: ${props.styles.justifyContent};`}
  ${props => props.styles?.alignItem && `align-item: ${props.styles.alignItem};`}
  ${props => props.styles?.margin && `margin: ${props.styles.margin};`}
   ${props => props.styles?.flex && `flex: ${props.styles.flex};`}
`;

export default FlexBox;
