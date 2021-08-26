import styled from 'styled-components';

type Props = {
  styles?: { fontSize?: string; fontWeight?: string; color?: string; margin?: string; padding?: string };
};

const Span = styled.span<Props>`
  ${props => props.styles?.fontSize && `font-size: ${props.styles.fontSize};`}
  ${props => props.styles?.fontWeight && `font-weight: ${props.styles.fontWeight};`}
  ${props => props.styles?.color && `color: ${props.styles.color};`}
  ${props => props.styles?.margin && `margin: ${props.styles.margin};`}
  ${props => props.styles?.padding && `padding: ${props.styles.padding};`}
`;

export default Span;
