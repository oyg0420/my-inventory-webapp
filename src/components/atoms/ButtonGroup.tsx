import styled from 'styled-components';
import Button from 'components/atoms/Button';

const ButtonGroup = styled.div`
  display: flex;

  ${Button} + ${Button} {
    margin-left: 5px;
  }
`;

export default ButtonGroup;
