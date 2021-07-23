import styled from 'styled-components';
import { ColorType } from '../styles';
type SizeType = 'small' | 'medium' | 'large';

type Props = {
  buttonType?: ColorType;
  buttonSize?: SizeType;
};

const Button = styled.button<Props>`
  display: inline-block;
  vertical-align: middle;
  font-weight: bold;
  ${props => {
    switch (props.buttonSize) {
      case 'large':
        return `
        padding: 16px 10px;
        font-size: 20px;
        `;
      case 'small':
        return `
        padding: 8px 10px;
        font-size: 14px;
          `;
      default:
        return `
        padding: 12px 10px;
        font-size: 18px;
        `;
    }
  }}
  text-align: center;
  white-space: nowrap;
  color: ${props => props.theme.button[props.buttonType || 'secondary'].color};
  background-color: ${props => props.theme.button[props.buttonType || 'secondary'].backgroundColor};
  border: 1px solid ${props => props.theme.button[props.buttonType || 'secondary'].borderColor};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.button[props.buttonType || 'secondary'].onHover.backgroundColor};
    border: 1px solid ${props => props.theme.button[props.buttonType || 'secondary'].onHover.borderColor};
  }

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #d5d5d5;
    border-color: #d5d5d5;
    color: #fff;
  }
`;

export default Button;
