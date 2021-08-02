import { call, put, takeLeading } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { fetchRelKeywords, fetchRelKeywordsFailed, fetchRelKeywordsSuccessed } from '.';
import { getRelKeywords, GetRelKeywordsResponse } from 'apis/RelKeywordAPI';
import { hideSpinner, showSpinner } from 'modules/spinner';

function* handleFetchKeywords(action: ActionType<typeof fetchRelKeywords>) {
  const { keyword } = action.payload;
  if (keyword) {
    try {
      yield put(showSpinner());
      const res: GetRelKeywordsResponse = yield call(getRelKeywords, { keyword });
      yield put(fetchRelKeywordsSuccessed(res));
    } catch (err) {
      yield put(fetchRelKeywordsFailed());
    } finally {
      yield put(hideSpinner());
    }
  }
}

export default function* relKeywordSaga() {
  yield takeLeading(fetchRelKeywords, handleFetchKeywords);
}
