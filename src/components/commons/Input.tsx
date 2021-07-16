import React, { ChangeEvent, useCallback, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #d5d5d5;
    border-color: #d5d5d5;
    color: #495057;
  }
`;

type Props = {
  onValueChange(value: string): void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ onValueChange, value, disabled, ...rest }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onValueChange(e.target.value);
    },
    [onValueChange]
  );

  return <StyledInput value={value} onChange={handleChange} disabled={disabled} {...rest} />;
};

export default Input;
