import { signIn, signOut, signUp } from 'modules/session';
import selectUser from 'modules/session/selector';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

type RequestSignInParams = {
  email: string;
  password: string;
};

type RequestSignUpParams = {
  email: string;
  name: string;
  password: string;
  history: ReturnType<typeof useHistory>;
};

const useSession = () => {
  const isLoggedIn = useSelector(selectUser.isLoggedIn);
  const user = useSelector(selectUser.user);
  const dispatch = useDispatch();

  const requestSignIn = useCallback(
    (params: RequestSignInParams) => {
      dispatch(signIn(params));
    },
    [dispatch]
  );

  const requestSignUp = useCallback(
    (params: RequestSignUpParams) => {
      dispatch(signUp(params));
    },
    [dispatch]
  );

  const requestSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  return {
    isLoggedIn,
    user,
    requestSignIn,
    requestSignUp,
    requestSignOut,
  };
};

export default useSession;
