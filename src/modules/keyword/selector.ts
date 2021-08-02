import { RootState } from 'modules/reducers';

const selectKeyword = {
  list: (state: RootState) => state.keyword.keywordList,
  relativeKeywords: (state: RootState) => state.keyword.keywordList[0]?.relativeKeywords,
};

export default selectKeyword;
