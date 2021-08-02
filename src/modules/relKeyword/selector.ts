import { RootState } from 'modules/reducers';

const selectRelKeyword = {
  list: (state: RootState) => state.relKeyword.keywordList || [],
  keyword: (state: RootState) => state.relKeyword.keyword,
  includedKeywords: (state: RootState) => state.relKeyword.includedKeywords || [],
  exceptedKeywords: (state: RootState) => state.relKeyword.exceptedKeywords || [],
};

export default selectRelKeyword;
