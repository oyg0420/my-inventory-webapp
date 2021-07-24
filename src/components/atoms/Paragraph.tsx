import styled from 'styled-components';
import { ColorType } from 'components/styles';

type Props = {
  type: ColorType;
  styles?: { textDecoration?: 'underline'; cursor?: 'pointer' };
};

const Paragraph = styled.p<Props>`
  margin: 3px;
  font-size: 14px;
  color: ${props => props.theme.paragraph[props.type].color};
  ${props => props.styles?.textDecoration && `text-decoration: ${props.styles.textDecoration}`};
  ${props => props.styles?.cursor && `cursor: ${props.styles.cursor}`};
`;

export default Paragraph;
