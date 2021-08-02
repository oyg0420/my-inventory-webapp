import { call, put, select, takeLeading } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import {
  addExceptedKeyword,
  addIncludedKeyword,
  deleteExceptedKeyword,
  deleteIncludedKeyword,
  fetchRelKeywords,
  fetchRelKeywordsFailed,
  fetchRelKeywordsSuccessed,
  setExceptedKeyword,
  setIncludedKeyword,
} from '.';
import { getRelKeywords, GetRelKeywordsResponse } from 'apis/RelKeywordAPI';
import { hideSpinner, showSpinner } from 'modules/spinner';
import selectRelKeyword from './selector';

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

function* handleAddIncludedKeyword(action: ActionType<typeof addIncludedKeyword>) {
  const includedKeywords: ReturnType<typeof selectRelKeyword.includedKeywords> = yield select(
    selectRelKeyword.includedKeywords
  );

  if (!includedKeywords.includes(action.payload)) {
    yield put(setIncludedKeyword([...includedKeywords, action.payload]));
  }
}

function* handleDeleteIncludedKeyword(action: ActionType<typeof deleteIncludedKeyword>) {
  const includedKeywords: ReturnType<typeof selectRelKeyword.includedKeywords> = yield select(
    selectRelKeyword.includedKeywords
  );
  const nextIncludedKeywords = [...includedKeywords];

  const founedIndex = nextIncludedKeywords.findIndex(value => value === action.payload);
  nextIncludedKeywords.splice(founedIndex, 1);
  yield put(setIncludedKeyword(nextIncludedKeywords));
}

function* handleAddExceptedKeyword(action: ActionType<typeof addExceptedKeyword>) {
  const exceptedKeywords: ReturnType<typeof selectRelKeyword.exceptedKeywords> = yield select(
    selectRelKeyword.exceptedKeywords
  );

  if (!exceptedKeywords.includes(action.payload)) {
    yield put(setExceptedKeyword([...exceptedKeywords, action.payload]));
  }
}

function* handleDeleteExceptedKeyword(action: ActionType<typeof deleteExceptedKeyword>) {
  const exceptedKeywords: ReturnType<typeof selectRelKeyword.exceptedKeywords> = yield select(
    selectRelKeyword.exceptedKeywords
  );
  const nextExceptedKeywords = [...exceptedKeywords];

  const founedIndex = nextExceptedKeywords.findIndex(value => value === action.payload);
  nextExceptedKeywords.splice(founedIndex, 1);
  yield put(setExceptedKeyword(nextExceptedKeywords));
}

export default function* relKeywordSaga() {
  yield takeLeading(fetchRelKeywords, handleFetchKeywords);
  yield takeLeading(addIncludedKeyword, handleAddIncludedKeyword);
  yield takeLeading(deleteIncludedKeyword, handleDeleteIncludedKeyword);
  yield takeLeading(addExceptedKeyword, handleAddExceptedKeyword);
  yield takeLeading(deleteExceptedKeyword, handleDeleteExceptedKeyword);
}
