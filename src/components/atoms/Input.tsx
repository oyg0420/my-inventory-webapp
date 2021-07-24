import { InputColorType } from 'components/styles';
import React, { ChangeEvent, useCallback, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input<{
  styles?: { width?: string; margin?: string; color?: string };
  inputType?: InputColorType;
}>`
  display: block;
  ${props => props.styles?.width && `width: ${props.styles.width};`}
  ${props => props.styles?.margin && `margin: ${props.styles.margin};`}
  padding: 0.375rem 0.75rem;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${props => props.theme.input[props.inputType || 'default'].borderColor};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: ${props => props.theme.input[props.inputType || 'default'].onFocus.borderColor};
    outline: 0;
    box-shadow: ${props => props.theme.input[props.inputType || 'default'].onFocus.boxShadow};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #d5d5d5;
    border-color: #d5d5d5;
    color: #495057;
  }
`;

const isValidNumberFormat = (originalValue: string) => /^[0-9]\d*$/.test(originalValue);

type Props = {
  onValueChange?(value: string): void;
  styles?: { width?: string; margin?: string; color?: string };
  inputType?: InputColorType;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ onValueChange, value, disabled, type, inputType, styles, ...rest }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const nextValue = e.target.value;
      if (type === 'number') {
        if (!nextValue || isValidNumberFormat(nextValue)) {
          onValueChange?.(nextValue.replace(/^0+\d/, ''));
        }
      } else {
        onValueChange?.(nextValue);
      }
    },
    [onValueChange, type]
  );

  return (
    <StyledInput
      type={type}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      styles={styles}
      inputType={inputType}
      {...rest}
    />
  );
};

export default styled(Input)``;
