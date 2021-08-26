import React, { useCallback } from 'react';
import Table from 'components/modules/Table';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteKeyword, fetchKeywords } from 'modules/keyword';
import selectKeyword from 'modules/keyword/selector';
import Icon from 'components/atoms/Icon';
import IconTrashRed from 'images/icon-trash-red.svg';
import FlexBox from 'components/atoms/FlexBox';
import SearchInput from 'components/modules/SearchInput';

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
  const keywordList = useSelector(selectKeyword.list);
  const relativeKeywords = useSelector(selectKeyword.relativeKeywords);
  const keyword = useSelector(selectKeyword.keyword);

  const dispatch = useDispatch();

  const handleKeypress = useCallback(
    (nextKeyword: string) => {
      dispatch(fetchKeywords({ keyword: nextKeyword }));
    },
    [dispatch]
  );

  const handleRelKeywordClick = useCallback(
    (nextKeyword: string) => {
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
        <FlexBox styles={{ flexDirection: 'column', margin: '10px 0 0 0', flex: 1 }}>
          <SearchInput originKeyword={keyword} onEnterKeyPress={handleKeypress} />
          <RelKeywordList>
            {(relativeKeywords || []).map(relativeKeyword => (
              <RelKeywordItem onClick={() => handleRelKeywordClick(relativeKeyword)}>{relativeKeyword}</RelKeywordItem>
            ))}
          </RelKeywordList>
        </FlexBox>
      </KeywordFilterField>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderColumn columnWidth="10%">키워드</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">PC 검색량</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">Mobile 검색량</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">총 검색량</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">제품수</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">비율</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">경쟁강도</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%" />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {keywordList.map((keywordItem, keywordItemIdx) => {
            return (
              <Table.Row key={v4()}>
                <Table.Column>{keywordItem.keyword}</Table.Column>
                <Table.Column>{keywordItem.searchVolumeWithPC}</Table.Column>
                <Table.Column>{keywordItem.searchVolumeWithMobile}</Table.Column>
                <Table.Column>{keywordItem.totalVolume}</Table.Column>
                <Table.Column>{keywordItem.totalCount}</Table.Column>
                <Table.Column>{keywordItem.competition}</Table.Column>
                <Table.Column>{keywordItem.competitiveStrength}</Table.Column>
                <Table.Column>
                  <DeleteFlexBox>
                    <Icon
                      onClick={() => handleDeleteClick(keywordItemIdx)}
                      url={IconTrashRed}
                      width="16px"
                      height="16px"
                    />
                  </DeleteFlexBox>
                </Table.Column>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </KeywordContainer>
  );
};

export default Keywords;
