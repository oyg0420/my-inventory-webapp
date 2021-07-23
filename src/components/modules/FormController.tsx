import Label from 'components/atoms/Label';
import styled from 'styled-components';

const Control = styled.div`
  display: flex;
  flex: 80%;
`;

const FormControlsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

type Props = {
  label: string;
};

const FormController: React.FC<Props> = ({ label, children }) => {
  return (
    <FormControlsContainer>
      <Label>{label}</Label>
      <Control>{children}</Control>
    </FormControlsContainer>
  );
};

export default FormController;
