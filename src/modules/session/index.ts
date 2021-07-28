/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'apis/SessionAPI';
import { useHistory } from 'react-router-dom';

interface SessionState {
  user: {
    id: string;
    email: string;
    name: string;
    avatar: string;
    status: 'live' | 'removed';
    token: string;
  };
}

export type SignInPayload = { email: string; password: string };

export type SignUpPayload = { email: string; name: string; password: string; history: ReturnType<typeof useHistory> };

const initialState: SessionState = {
  user: {
    id: '',
    email: '',
    name: '',
    avatar: '',
    status: 'live',
    token: '',
  },
};

const sessionSlice = createSlice({
  name: 'SESSION',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<SignInPayload>) {},
    signInSuccessed(state, action: PayloadAction<{ user: User }>) {
      state.user = action.payload.user;
    },
    signInFailed: () => initialState,
    signUp(state, action: PayloadAction<SignUpPayload>) {},
    signUpSuccessed(state, action: PayloadAction<ReturnType<typeof useHistory>>) {},
    signUpFailed: () => initialState,
    signOut: () => initialState,
  },
});

const { actions, reducer: sessionReducer } = sessionSlice;

export const { signIn, signInSuccessed, signInFailed, signUp, signUpSuccessed, signUpFailed, signOut } = actions;

export default sessionReducer;
