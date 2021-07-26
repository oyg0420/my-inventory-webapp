import { combineReducers } from 'redux';
import sessionReducer from 'modules/session';

export const rootReducer = combineReducers({
  session: sessionReducer,
});
