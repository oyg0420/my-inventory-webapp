/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetRelKeywordsResponse, KeywordItem } from 'apis/RelKeywordAPI';

interface KeywordState {
  keywordList: KeywordItem[];
  keyword: string;
  includedKeywords: string[];
  exceptedKeywords: string[];
}

export type FetchRelKeywordPayload = { keyword: string };

const initialState: KeywordState = {
  keywordList: [],
  keyword: '',
  includedKeywords: [],
  exceptedKeywords: [],
};

const relKeywordsSlice = createSlice({
  name: 'REL_KEYWORD',
  initialState,
  reducers: {
    fetchRelKeywords(state, action: PayloadAction<FetchRelKeywordPayload>) {
      state.keyword = action.payload.keyword;
    },
    fetchRelKeywordsSuccessed(state, action: PayloadAction<GetRelKeywordsResponse>) {
      state.keywordList = action.payload.result;
    },
    fetchRelKeywordsFailed(state) {},
    setIncludedKeyword(state, action: PayloadAction<string[]>) {
      state.includedKeywords = action.payload;
    },
    setExceptedKeyword(state, action: PayloadAction<string[]>) {
      state.exceptedKeywords = action.payload;
    },
    addIncludedKeyword(state, action: PayloadAction<string>) {},
    deleteIncludedKeyword(state, action: PayloadAction<string>) {},
    addExceptedKeyword(state, action: PayloadAction<string>) {},
    deleteExceptedKeyword(state, action: PayloadAction<string>) {},
    leaveRelKeywords: () => initialState,
  },
});

const { actions, reducer: relKeywordsReducer } = relKeywordsSlice;

export const {
  fetchRelKeywords,
  fetchRelKeywordsSuccessed,
  fetchRelKeywordsFailed,
  leaveRelKeywords,
  addExceptedKeyword,
  addIncludedKeyword,
  deleteExceptedKeyword,
  deleteIncludedKeyword,
  setExceptedKeyword,
  setIncludedKeyword,
} = actions;

export default relKeywordsReducer;
