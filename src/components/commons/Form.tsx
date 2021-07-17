import styled from 'styled-components';

const ControllerGroupContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${ControllerGroupContainer} {
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  color: #212529;
  font-size: 14px;
  flex-basis: 20%;
`;

export const Controller = styled.div`
  display: flex;
  flex: 80%;
`;

type Props = {
  label: string;
};

export const ControllerGroup: React.FC<Props> = ({ label, children }) => {
  return (
    <ControllerGroupContainer>
      <Label>{label}</Label>
      <Controller>{children}</Controller>
    </ControllerGroupContainer>
  );
};
