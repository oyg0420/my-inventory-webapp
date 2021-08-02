import { RootState } from 'modules/reducers';

const selectRelKeyword = {
  list: (state: RootState) => state.relKeyword.keywordList,
};

export default selectRelKeyword;
