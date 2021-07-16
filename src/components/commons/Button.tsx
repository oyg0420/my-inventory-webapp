import styled from 'styled-components';
import { ColorType } from '../styles';

type Props = {
  buttonType?: ColorType;
};

const Button = styled.button<Props>`
  color: ${props => props.theme.button[props.buttonType || 'secondary'].color};
  background-color: ${props => props.theme.button[props.buttonType || 'secondary'].backgroundColor};
  border: 1px solid ${props => props.theme.button[props.buttonType || 'secondary'].borderColor};

  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 7px 20px;
  font-size: 14px;
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

export const ButtonGroup = styled.div`
  display: flex;

  ${Button} + ${Button} {
    margin-left: 5px;
  }
`;

export default Button;
