/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetRelKeywordsResponse, KeywordItem } from 'apis/RelKeywordAPI';

interface KeywordState {
  keywordList: KeywordItem[];
}

export type FetchRelKeywordPayload = { keyword: string };

const initialState: KeywordState = {
  keywordList: [],
};

const relKeywordsSlice = createSlice({
  name: 'REL_KEYWORD',
  initialState,
  reducers: {
    fetchRelKeywords(state, action: PayloadAction<FetchRelKeywordPayload>) {},
    fetchRelKeywordsSuccessed(state, action: PayloadAction<GetRelKeywordsResponse>) {
      state.keywordList = action.payload.result;
    },
    fetchRelKeywordsFailed(state) {},
  },
});

const { actions, reducer: relKeywordsReducer } = relKeywordsSlice;

export const { fetchRelKeywords, fetchRelKeywordsSuccessed, fetchRelKeywordsFailed } = actions;

export default relKeywordsReducer;
