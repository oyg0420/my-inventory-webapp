/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type SpinnerState = { show: boolean };

const initialState: SpinnerState = {
  show: false,
};

const spinnerSlice = createSlice({
  name: 'SPINNER',
  initialState,
  reducers: {
    showSpinner(state) {
      state.show = true;
    },
    hideSpinner(state) {
      state.show = false;
    },
  },
});

const { actions, reducer: spinnerReducer } = spinnerSlice;

export const { showSpinner, hideSpinner } = actions;

export default spinnerReducer;
