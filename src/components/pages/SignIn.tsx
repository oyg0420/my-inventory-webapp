import React from 'react';
import styled from 'styled-components';
import { useForm, Controller, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import Form from 'components/atoms/Form';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { emailRegExp, passwordRegExp } from 'regExp';
import Icon from 'components/atoms/Icon';
import IconLogo from 'images/icon-logo.svg';

type FormValues = {
  email: string;
  password: string;
};

const SignInContainer = styled.div`
  display: flex;
  min-width: 500px;
  height: 400px;
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  background-color: #fff;

  ${Icon} {
    margin-bottom: 40px;
  }

  ${Input} {
    display: flex;
    margin-bottom: 10px;
  }
`;

const SignInSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3f2fd;
`;

const SignIn: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<FormValues> = erros => {
    console.log(erros);
  };

  return (
    <SignInSection>
      <SignInContainer>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Icon url={IconLogo} width="200px" height="100px" />
          <Controller
            control={control}
            name="email"
            rules={{ required: true, pattern: emailRegExp }}
            render={({ field: { value, onChange } }) => <Input value={value} onValueChange={onChange} />}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: true, pattern: passwordRegExp }}
            render={({ field: { value, onChange } }) => (
              <Input type="password" value={value} onValueChange={onChange} />
            )}
          />
          <Button type="submit" buttonType="primary" buttonSize="medium">
            로그인
          </Button>
        </Form>
      </SignInContainer>
    </SignInSection>
  );
};

export default SignIn;
