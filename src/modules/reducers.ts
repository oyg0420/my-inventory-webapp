import { combineReducers } from 'redux';
import sessionReducer from 'modules/session';
import { StateType } from 'typesafe-actions';
import keywordsReducer from 'modules/keyword';

export const rootReducer = combineReducers({
  session: sessionReducer,
  keyword: keywordsReducer,
});

export type RootState = StateType<typeof rootReducer>;
