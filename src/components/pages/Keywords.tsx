import React, { KeyboardEvent } from 'react';
import Table from 'components/modules/Table';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteKeyword, fetchKeywords } from 'modules/keyword';
import Input from 'components/atoms/Input';
import selectKeyword from 'modules/keyword/selector';
import Icon from 'components/atoms/Icon';
import IconSearch from 'images/icon-search.svg';
import IconTrashRed from 'images/icon-trash-red.svg';
import InputAddon from 'components/atoms/InputAddon';
import FlexBox from 'components/atoms/FlexBox';

const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 30px;
`;

const KeywordFilterField = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteFlexBox = styled(FlexBox)`
  justify-content: center;
  ${Icon} {
    cursor: pointer;
  }
`;

const RelKeywordItem = styled.li`
  max-width: 120px;
  padding: 0 5px;
  border-radius: 100px;
  background-color: rgb(234, 240, 245);
  vertical-align: middle;
  height: 22px;
  line-height: 22px;
  margin: 0 5px 5px 0;
  font-size: 12px;
  cursor: pointer;
`;

const RelKeywordList = styled.ul`
  position: relative;
  flex: 1 1 0%;
  padding: 5px 6px 1px 10px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  box-sizing: border-box;
  cursor: text;
  flex-wrap: wrap;
  display: flex;
`;

const Keywords: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const keywordList = useSelector(selectKeyword.list);
  const relativeKeywords = useSelector(selectKeyword.relativeKeywords);

  const dispatch = useDispatch();

  const handleSearchKeywordChange = useCallback((nextKeyword: string) => {
    setKeyword(nextKeyword);
  }, []);

  const handleKeypress = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        dispatch(fetchKeywords({ keyword }));
      }
    },
    [dispatch, keyword]
  );

  const handleRelKeywordClick = useCallback(
    (nextKeyword: string) => {
      setKeyword(nextKeyword);
      dispatch(fetchKeywords({ keyword: nextKeyword }));
    },
    [dispatch]
  );

  const handleDeleteClick = useCallback(
    (keywordItemIdx: number) => {
      dispatch(deleteKeyword({ selectedIdx: keywordItemIdx }));
    },
    [dispatch]
  );

  return (
    <KeywordContainer>
      <KeywordFilterField>
        <FlexBox styles={{ flexDirection: 'column', margin: '10px 0 0 0' }}>
          <InputAddon>
            <Input value={keyword} onValueChange={handleSearchKeywordChange} onKeyPress={handleKeypress} />
            <span>
              <Icon url={IconSearch} width="16px" height="16px" />
            </span>
          </InputAddon>
          <RelKeywordList>
            {(relativeKeywords || []).map(relativeKeyword => (
              <RelKeywordItem onClick={() => handleRelKeywordClick(relativeKeyword)}>{relativeKeyword}</RelKeywordItem>
            ))}
          </RelKeywordList>
        </FlexBox>
      </KeywordFilterField>
      <Table
        columns={[
          { title: '키워드', key: v4(), width: '10%' },
          { title: 'PC 검색량', key: v4(), width: '10%' },
          { title: 'Mobile 검색량', key: v4(), width: '10%' },
          { title: '총 검색량', key: v4(), width: '10%' },
          { title: '제품수', key: v4(), width: '10%' },
          { title: '비율', key: v4(), width: '10%' },
          { title: '경쟁강도', key: v4(), width: '10%' },
          { title: '', key: v4(), width: '10%' },
        ]}
        data={keywordList.map((keywordItem, keywordItemIdx) => {
          return {
            key: v4(),
            colums: [
              { key: v4(), element: keywordItem.keyword },
              { key: v4(), element: keywordItem.searchVolumeWithPC },
              { key: v4(), element: keywordItem.searchVolumeWithMobile },
              { key: v4(), element: keywordItem.totalVolume },
              { key: v4(), element: keywordItem.totalCount },
              { key: v4(), element: keywordItem.competition },
              { key: v4(), element: keywordItem.competitiveStrength },
              {
                key: v4(),
                element: (
                  <DeleteFlexBox>
                    <Icon
                      onClick={() => handleDeleteClick(keywordItemIdx)}
                      url={IconTrashRed}
                      width="16px"
                      height="16px"
                    />
                  </DeleteFlexBox>
                ),
              },
            ],
          };
        })}
      />
    </KeywordContainer>
  );
};

export default Keywords;
