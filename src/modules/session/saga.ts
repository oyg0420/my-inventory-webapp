import { fork, take } from 'redux-saga/effects';
import { signIn, SignInPayload, signOut, signUp, SignUpPayload } from 'modules/session';
import { ActionType } from 'typesafe-actions';

function* requestSignIn(payload: SignInPayload) {
  /**
   * @todo API call
   */
}

function* requestSignUp(payload: SignUpPayload) {
  /**
   * @todo API call
   */
}

function* LoginFlow() {
  while (true) {
    const { payload }: ActionType<typeof signIn> = yield take(signIn);
    yield fork(requestSignIn, payload);
    yield take(signOut);
  }
}

function* SignUpFlow() {
  while (true) {
    const { payload }: ActionType<typeof signUp> = yield take(signUp);
    yield fork(requestSignUp, payload);
  }
}

export function* sessionSaga() {
  yield fork(LoginFlow);
  yield fork(SignUpFlow);
}
