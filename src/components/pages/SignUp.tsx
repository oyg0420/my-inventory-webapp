import React from 'react';
import WithoutAuthBox from 'components/modules/WithoutAuthBox';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Form from 'components/atoms/Form';
import FlexBox from 'components/atoms/FlexBox';
import Input from 'components/atoms/Input';
import { emailRegExp, passwordRegExp } from 'regExp';
import { useCallback } from 'react';
import Paragraph from 'components/atoms/Paragraph';
import { useMemo } from 'react';
import Button from 'components/atoms/Button';
import { useHistory } from 'react-router-dom';
import useFormError from 'hooks/useFormError';
import { useDispatch } from 'react-redux';
import { signUp } from 'modules/session';

type FormValues = {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
};

const SignUp: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { control, handleSubmit, formState, getValues } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      name: '',
      password: '',
      passwordCheck: '',
    },
  });
  const { getErrorMessage } = useFormError(formState);
  const emailErrorMessage = useMemo(() => getErrorMessage('email'), [getErrorMessage]);
  const nameErrorMessage = useMemo(() => getErrorMessage('name'), [getErrorMessage]);
  const passwordErrorMessage = useMemo(() => getErrorMessage('password'), [getErrorMessage]);
  const passwordCheckErrorMessage = useMemo(() => getErrorMessage('passwordCheck'), [getErrorMessage]);

  const onSubmit: SubmitHandler<FormValues> = data => {
    /**
     * @todo Action Dispatch
     */
    dispatch(signUp({ email: data.email, name: data.name, password: data.password, history }));
  };

  const handleSignInClick = useCallback(() => {
    history.push('/sign_in');
  }, [history]);

  return (
    <WithoutAuthBox styles={{ height: '500px' }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexBox styles={{ flexDirection: 'column', margin: '0 0 10px 0' }}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: '이메일을 입력하세요.',
              pattern: { value: emailRegExp, message: '올바른 이메일을 입력하세요.' },
            }}
            render={({ field: { value, onChange } }) => {
              return (
                <Input
                  inputType={emailErrorMessage ? 'error' : 'default'}
                  value={value}
                  onValueChange={onChange}
                  placeholder="이메일"
                  styles={{ margin: emailErrorMessage ? '' : '0 0 10px 0' }}
                />
              );
            }}
          />
          {emailErrorMessage && (
            <Paragraph type={emailErrorMessage ? 'danger' : 'secondary'}>{emailErrorMessage}</Paragraph>
          )}
          <Controller
            control={control}
            name="name"
            rules={{
              required: '이름을 입력하세요.',
            }}
            render={({ field: { value, onChange } }) => {
              return (
                <Input
                  inputType={nameErrorMessage ? 'error' : 'default'}
                  value={value}
                  onValueChange={onChange}
                  placeholder="이름"
                  styles={{ margin: nameErrorMessage ? '' : '0 0 10px 0' }}
                />
              );
            }}
          />
          {nameErrorMessage && (
            <Paragraph type={nameErrorMessage ? 'danger' : 'secondary'}>{nameErrorMessage}</Paragraph>
          )}
          <Controller
            control={control}
            name="password"
            rules={{
              required: '비밀번호를 입력하세요.',
              pattern: {
                value: passwordRegExp,
                message: '8자 이상 영문 대 소문자, 숫자, 특수문자를 포함한 비밀번호를 입력하세요.',
              },
            }}
            render={({ field: { value, onChange } }) => {
              return (
                <Input
                  type="password"
                  inputType={passwordErrorMessage ? 'error' : 'default'}
                  value={value}
                  onValueChange={onChange}
                  placeholder="비밀번호"
                />
              );
            }}
          />
          <Paragraph type={passwordErrorMessage ? 'danger' : 'secondary'}>
            {passwordErrorMessage || '8자 이상 영문 대 소문자, 숫자, 특수문자를 포함한 비밀번호를 입력하세요.'}
          </Paragraph>
          <Controller
            control={control}
            name="passwordCheck"
            rules={{
              required: '비밀번호 확인을 입력하세요.',
              pattern: {
                value: passwordRegExp,
                message: '8자 이상 영문 대 소문자, 숫자, 특수문자를 포함한 비밀번호를 입력하세요.',
              },
              validate: value => value === getValues('password') || '비밀번호가 일치하지 않습니다.',
            }}
            render={({ field: { value, onChange } }) => {
              return (
                <Input
                  inputType={passwordCheckErrorMessage ? 'error' : 'default'}
                  type="password"
                  value={value}
                  onValueChange={onChange}
                  placeholder="비밀번호 확인"
                  styles={{ margin: passwordCheckErrorMessage ? '' : '0 0 10px 0' }}
                />
              );
            }}
          />
          {passwordCheckErrorMessage && (
            <Paragraph type={passwordCheckErrorMessage ? 'danger' : 'secondary'}>{passwordCheckErrorMessage}</Paragraph>
          )}
        </FlexBox>
        <Button type="submit" buttonType="primary" buttonSize="medium">
          회원가입
        </Button>
      </Form>
      <FlexBox styles={{ justifyContent: 'center' }}>
        <Paragraph type="secondary">이미 가입하셨나요?</Paragraph>
        <Paragraph
          type="primary"
          styles={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={handleSignInClick}
        >
          로그인
        </Paragraph>
      </FlexBox>
    </WithoutAuthBox>
  );
};

export default SignUp;
