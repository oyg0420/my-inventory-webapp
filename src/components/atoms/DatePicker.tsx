import React from 'react';
import Input from 'components/atoms/Input';
import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';

const StyledInput = styled(Input)`
  position: relative;
`;

type Porps = { value: string; onDateChange(date: string): void } & InputHTMLAttributes<HTMLInputElement>;

const DatePicker: React.FC<Porps> = ({ value, onDateChange, ...rest }) => {
  return <StyledInput type="date" value={value} onChange={e => onDateChange(e.target.value)} {...rest} />;
};

export default DatePicker;
