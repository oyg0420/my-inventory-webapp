import Input from 'components/atoms/Input';
import styled from 'styled-components';

const InputAddon = styled.div<{ styles?: { width?: string } }>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: ${props => props.styles?.width || '100%'};

  ${Input} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
    margin-right: -1px;
  }

  ${Input}:focus {
    z-index: 3;
  }

  span {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    white-space: nowrap;
    background-color: #6c757d;
    border: 1px solid #6c757d;
    border-radius: 0.25rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  span:hover {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
  }
`;

export default InputAddon;
