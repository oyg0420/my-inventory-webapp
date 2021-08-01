/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetKeywordsResponse, KeywordItem } from 'apis/KeywordAPI';

interface KeywordState {
  keywordList: KeywordItem[];
}

export type FetchKeywordPayload = { keyword: string };

export type DeleteKeywordPayload = { selectedIdx: number };

const initialState: KeywordState = {
  keywordList: [],
};

const keywordsSlice = createSlice({
  name: 'KEYWORD',
  initialState,
  reducers: {
    fetchKeywords(state, action: PayloadAction<FetchKeywordPayload>) {},
    fetchKeywordsSuccessed(state, action: PayloadAction<GetKeywordsResponse>) {
      state.keywordList = [action.payload.result, ...state.keywordList];
    },
    fetchKeywordsFailed(state) {},
    deleteKeyword(state, action: PayloadAction<DeleteKeywordPayload>) {
      state.keywordList.splice(action.payload.selectedIdx, 1);
    },
  },
});

const { actions, reducer: keywordsReducer } = keywordsSlice;

export const { fetchKeywords, fetchKeywordsFailed, fetchKeywordsSuccessed, deleteKeyword } = actions;

export default keywordsReducer;
