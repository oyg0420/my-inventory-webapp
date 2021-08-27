import { call, put, takeLeading } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { fetchKeywords, fetchKeywordsFailed, fetchKeywordsSuccessed } from '.';
import { getKeywords, GetKeywordsResponse, PriceOption } from 'apis/KeywordAPI';
import { hideSpinner, showSpinner } from 'modules/spinner';
import { compareNumber } from 'utils/array';

function* getPrice(price: string[]) {
  const parsingPrice: number[] = yield price.map(value => {
    return parseInt(value.replace(/[,원]/g, ''));
  });
  const sortedPrice = parsingPrice.sort(compareNumber);

  return {
    highPrice: sortedPrice[sortedPrice.length - 1].toLocaleString(),
    lowPrice: sortedPrice[0].toLocaleString(),
    avgPrice: Math.floor(
      sortedPrice.reduce((totalPrice, currentPrice) => {
        return totalPrice + currentPrice;
      }, 0) / sortedPrice.length
    ).toLocaleString(),
  };
}

function* handleFetchKeywords(action: ActionType<typeof fetchKeywords>) {
  const { keyword } = action.payload;
  if (keyword) {
    try {
      yield put(showSpinner());
      const res: GetKeywordsResponse = yield call(getKeywords, { keyword });
      const priceOption: PriceOption = yield getPrice(res.result.price);
      yield put(fetchKeywordsSuccessed({ ...res, priceOption }));
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
