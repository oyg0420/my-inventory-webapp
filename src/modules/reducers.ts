import { combineReducers } from 'redux';
import sessionReducer from 'modules/session';
import { StateType } from 'typesafe-actions';
import keywordsReducer from 'modules/keyword';
import spinnerReducer from './spinner';

export const rootReducer = combineReducers({
  session: sessionReducer,
  keyword: keywordsReducer,
  spinner: spinnerReducer,
});

export type RootState = StateType<typeof rootReducer>;
