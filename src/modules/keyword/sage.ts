import { call, put, takeLeading } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { fetchKeywords, fetchKeywordsFailed, fetchKeywordsSuccessed } from '.';
import { getKeywords, GetKeywordsResponse } from 'apis/KeywordAPI';
import { hideSpinner, showSpinner } from 'modules/spinner';

function* handleFetchKeywords(action: ActionType<typeof fetchKeywords>) {
  const { keyword } = action.payload;
  if (keyword) {
    try {
      yield put(showSpinner());
      const res: GetKeywordsResponse = yield call(getKeywords, { keyword });
      yield put(fetchKeywordsSuccessed(res));
    } catch (err) {
      yield put(fetchKeywordsFailed());
    } finally {
      yield put(hideSpinner());
    }
  }
}

export default function* keywordSaga() {
  yield takeLeading(fetchKeywords, handleFetchKeywords);
}
