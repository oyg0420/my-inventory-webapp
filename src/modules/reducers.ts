import { combineReducers } from 'redux';
import sessionReducer from 'modules/session';
import { StateType } from 'typesafe-actions';
import keywordsReducer from 'modules/keyword';
import spinnerReducer from './spinner';
import relKeywordsReducer from './relKeyword';

export const rootReducer = combineReducers({
  session: sessionReducer,
  keyword: keywordsReducer,
  relKeyword: relKeywordsReducer,
  spinner: spinnerReducer,
});

export type RootState = StateType<typeof rootReducer>;
