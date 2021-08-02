import React from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addExceptedKeyword,
  addIncludedKeyword,
  deleteExceptedKeyword,
  deleteIncludedKeyword,
  fetchRelKeywords,
} from 'modules/relKeyword';
import selectRelKeyword from 'modules/relKeyword/selector';
import FlexBox from 'components/atoms/FlexBox';
import RelKeywordTable from './RelKeywordTable';
import SearchInput from 'components/modules/SearchInput';
import FilterControl from 'components/modules/FilterControl';

const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 30px;
`;

const KeywordFilterField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const RelKeywords: React.FC = () => {
  const keywordList = useSelector(selectRelKeyword.list);
  const includedKeywords = useSelector(selectRelKeyword.includedKeywords);
  const exceptedKeywords = useSelector(selectRelKeyword.exceptedKeywords);
  const keyword = useSelector(selectRelKeyword.keyword);
  const dispatch = useDispatch();

  const handleKeypress = useCallback(
    (nextKeyword: string) => {
      dispatch(fetchRelKeywords({ keyword: nextKeyword }));
    },
    [dispatch]
  );

  const getFilteredRelKeyword = useCallback(() => {
    let nextRelKeywords = [];
    nextRelKeywords = keywordList.filter(nextRelKeyword => {
      if (includedKeywords.length > 0) {
        if (includedKeywords.every(next => nextRelKeyword.relKeyword.includes(next))) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    });

    nextRelKeywords = nextRelKeywords.filter(nextRelKeyword => {
      if (exceptedKeywords.length > 0) {
        if (exceptedKeywords.findIndex(next => nextRelKeyword.relKeyword.includes(next)) > -1) {
          return false;
        } else {
          return true;
        }
      }
      return true;
    });

    return nextRelKeywords;
  }, [exceptedKeywords, includedKeywords, keywordList]);

  const onAddIncludedKeywordButtonClick = useCallback(
    (nextIncludedKeyword: string) => {
      dispatch(addIncludedKeyword(nextIncludedKeyword));
    },
    [dispatch]
  );

  const onDeleteIncludedKeywordButtonClick = useCallback(
    (nextIncludedKeyword: string) => {
      dispatch(deleteIncludedKeyword(nextIncludedKeyword));
    },
    [dispatch]
  );

  const onAddExceptedKeywordButtonClick = useCallback(
    (nextExceptedKeyword: string) => {
      dispatch(addExceptedKeyword(nextExceptedKeyword));
    },
    [dispatch]
  );

  const onDeleteExceptedKeywordButtonClick = useCallback(
    (nextExceptedKeyword: string) => {
      dispatch(deleteExceptedKeyword(nextExceptedKeyword));
    },
    [dispatch]
  );

  return (
    <KeywordContainer>
      <KeywordFilterField>
        <FlexBox styles={{ flexDirection: 'column', margin: '10px 0 0 0', flex: 1 }}>
          <SearchInput originKeyword={keyword} onEnterKeyPress={handleKeypress} />
          <FlexBox styles={{ flexDirection: 'row', margin: '10px 0 0 0', flex: 1 }}>
            <FilterControl
              label="포함 키워드"
              items={includedKeywords}
              onClick={onAddIncludedKeywordButtonClick}
              onItemDeleteClick={onDeleteIncludedKeywordButtonClick}
            />
            <FilterControl
              label="제외 키워드"
              items={exceptedKeywords}
              onClick={onAddExceptedKeywordButtonClick}
              onItemDeleteClick={onDeleteExceptedKeywordButtonClick}
            />
          </FlexBox>
        </FlexBox>
      </KeywordFilterField>
      <RelKeywordTable keywordList={getFilteredRelKeyword()} />
    </KeywordContainer>
  );
};

export default RelKeywords;
