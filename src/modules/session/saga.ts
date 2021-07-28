import { call, fork, put, take, takeLeading } from 'redux-saga/effects';
import {
  signIn,
  signInFailed,
  SignInPayload,
  signInSuccessed,
  signOut,
  signUp,
  SignUpPayload,
  signUpSuccessed,
  signUpFailed,
} from 'modules/session';
import { ActionType } from 'typesafe-actions';
import { postSignIn, PostSignInResponse, postSignUp } from 'apis/SessionAPI';
import { setAuthenticationHeader } from 'apis';
import { useHistory } from 'react-router-dom';

function* requestSignIn(payload: SignInPayload) {
  try {
    const res: PostSignInResponse = yield call(postSignIn, payload);
    yield put(signInSuccessed({ user: res.user }));
  } catch (err) {
    yield put(signInFailed());
  }
}

function* handleSignInSuccessed(action: ReturnType<typeof signInSuccessed>) {
  yield call(setAuthenticationHeader, action.payload.user.token);
}

function handleSignInFailed() {
  /**
   * @todo ErrorHandler 적용
   */
}

function* requestSignUp(payload: SignUpPayload) {
  try {
    yield call(postSignUp, payload);
    yield put(signUpSuccessed(payload.history));
  } catch (err) {
    yield put(signUpFailed());
  }
}

function* handleSignUpSuccessed(action: ReturnType<typeof signUpSuccessed>) {
  yield action.payload.push('/sign_in');
}

function* handleSignUpFailed() {
  /**
   * @todo ErrorHandler 적용
   */
}

function* LoginFlow() {
  while (true) {
    const { payload }: ActionType<typeof signIn> = yield take(signIn);
    yield fork(requestSignIn, payload);
    yield take([signOut, signInFailed]);
  }
}

function* SignUpFlow() {
  while (true) {
    const { payload }: ActionType<typeof signUp> = yield take(signUp);
    yield fork(requestSignUp, payload);
    yield take([signUpSuccessed, signUpFailed]);
  }
}

export function* sessionSaga() {
  yield takeLeading(signUpFailed, handleSignUpFailed);
  yield takeLeading(signUpSuccessed, handleSignUpSuccessed);
  yield takeLeading(signInFailed, handleSignInFailed);
  yield takeLeading(signInSuccessed, handleSignInSuccessed);
  yield fork(LoginFlow);
  yield fork(SignUpFlow);
}
