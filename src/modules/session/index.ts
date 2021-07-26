/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  sessionToken: string;
  user: {
    email: string;
    name: string;
  };
}

export type SignInPayload = { email: string; password: string };

export type SignUpPayload = { email: string; name: string; password: string };

export type User = {
  sessionToken: string;
  email: string;
  name: string;
};

const initialState: SessionState = {
  sessionToken: '',
  user: {
    email: '',
    name: '',
  },
};

const sessionSlice = createSlice({
  name: 'SESSION',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<SignInPayload>) {},
    signInSuccessed(state, action: PayloadAction<{ user: User }>) {
      state.sessionToken = action.payload.user.sessionToken;
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.name;
    },
    signInFailed: () => initialState,
    signUp(state, action: PayloadAction<SignUpPayload>) {},
    signUpSuccessed(state, action: PayloadAction<{ user: User }>) {
      state.sessionToken = action.payload.user.sessionToken;
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.name;
    },
    signUpFailed: () => initialState,
    signOut: () => initialState,
  },
});

const { actions, reducer: sessionReducer } = sessionSlice;

export const { signIn, signInSuccessed, signInFailed, signUp, signUpSuccessed, signUpFailed, signOut } = actions;

export default sessionReducer;
