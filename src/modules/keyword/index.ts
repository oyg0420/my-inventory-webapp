/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetKeywordsResponse, KeywordItem, PriceOption } from 'apis/KeywordAPI';

interface KeywordState {
  keywordList: KeywordItem[];
  keyword: string;
}

export type FetchKeywordPayload = { keyword: string };

export type DeleteKeywordPayload = { selectedIdx: number };

const initialState: KeywordState = {
  keywordList: [],
  keyword: '',
};

const keywordsSlice = createSlice({
  name: 'KEYWORD',
  initialState,
  reducers: {
    fetchKeywords(state, action: PayloadAction<FetchKeywordPayload>) {
      state.keyword = action.payload.keyword;
    },
    fetchKeywordsSuccessed(state, action: PayloadAction<GetKeywordsResponse & { priceOption: PriceOption }>) {
      state.keywordList = [{ ...action.payload.result, ...action.payload.priceOption }, ...state.keywordList];
    },
    fetchKeywordsFailed(state) {},
    deleteKeyword(state, action: PayloadAction<DeleteKeywordPayload>) {
      state.keywordList.splice(action.payload.selectedIdx, 1);
    },
    initKeywords: state => initialState,
  },
});

const { actions, reducer: keywordsReducer } = keywordsSlice;

export const { fetchKeywords, fetchKeywordsFailed, fetchKeywordsSuccessed, deleteKeyword, initKeywords } = actions;

export default keywordsReducer;
