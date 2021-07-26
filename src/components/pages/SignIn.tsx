import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Form from 'components/atoms/Form';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { emailRegExp, passwordRegExp } from 'regExp';
import Paragraph from 'components/atoms/Paragraph';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import FlexBox from 'components/atoms/FlexBox';
import WithoutAuthBox from 'components/modules/WithoutAuthBox';
import useFormError from 'hooks/useFormError';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'modules/session';

type FormValues = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { control, handleSubmit, formState } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { getErrorMessage } = useFormError(formState);
  const emailErrorMessage = useMemo(() => getErrorMessage('email'), [getErrorMessage]);
  const passwordErrorMessage = useMemo(() => getErrorMessage('password'), [getErrorMessage]);

  const onSubmit: SubmitHandler<FormValues> = data => {
    /**
     * @todo Action Dispatch
     */
    dispatch(signIn({ email: data.email, password: data.password }));
  };

  const handleSignUpClick = useCallback(() => {
    history.push('/sign_up');
  }, [history]);

  return (
    <WithoutAuthBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexBox styles={{ flexDirection: 'column', margin: '0 0 10px 0' }}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: '이메일을 입력하세요.',
              pattern: { value: emailRegExp, message: '올바른 이메일을 입력하세요.' },
            }}
            render={({ field: { value, onChange } }) => (
              <Input
                inputType={emailErrorMessage ? 'error' : 'default'}
                value={value}
                onValueChange={onChange}
                placeholder="이메일"
                styles={{ margin: emailErrorMessage ? '' : '0 0 10px 0' }}
              />
            )}
          />
          {formState.errors.email?.message && <Paragraph type="danger">{formState.errors.email?.message}</Paragraph>}
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
            render={({ field: { value, onChange } }) => (
              <Input
                inputType={passwordErrorMessage ? 'error' : 'default'}
                type="password"
                value={value}
                onValueChange={onChange}
                placeholder="비밀번호"
                styles={{ margin: passwordErrorMessage ? '' : '0 0 10px 0' }}
              />
            )}
          />
          {formState.errors.password?.message && (
            <Paragraph type="danger">{formState.errors.password?.message}</Paragraph>
          )}
        </FlexBox>
        <Button type="submit" buttonType="primary" buttonSize="medium">
          로그인
        </Button>
      </Form>
      <FlexBox styles={{ justifyContent: 'center' }}>
        <Paragraph type="secondary">처음이신가요?</Paragraph>
        <Paragraph
          type="primary"
          styles={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={handleSignUpClick}
        >
          회원가입
        </Paragraph>
      </FlexBox>
    </WithoutAuthBox>
  );
};

export default SignIn;
