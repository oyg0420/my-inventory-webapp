import { combineReducers } from 'redux';
import sessionReducer from 'modules/session';
import { StateType } from 'typesafe-actions';

export const rootReducer = combineReducers({
  session: sessionReducer,
});

export type RootState = StateType<typeof rootReducer>;
