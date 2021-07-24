import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Icon from 'components/atoms/Icon';
import IconLogo from 'images/icon-logo.svg';

const ContainerWithoutAuth = styled.div<{ styles?: { height?: string } }>`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  height: ${props => props.styles?.height || '400px'};
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  background-color: #fff;

  ${Icon} {
    margin-bottom: 40px;
    width: 100%;
    background-position: left;
  }

  ${Input} {
    display: flex;
  }
`;

const SectionWithoutAuth = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3f2fd;
`;

type Props = {
  styles?: { height?: string };
};

const WithoutAuthBox: React.FC<Props> = ({ styles, children }) => {
  return (
    <SectionWithoutAuth>
      <ContainerWithoutAuth styles={styles}>
        <Icon url={IconLogo} width="200px" height="100px" />
        {children}
      </ContainerWithoutAuth>
    </SectionWithoutAuth>
  );
};

export default WithoutAuthBox;
