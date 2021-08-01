import { RootState } from 'modules/reducers';

const selectKeyword = {
  list: (state: RootState) => state.keyword.keywordList,
};

export default selectKeyword;
