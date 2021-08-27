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
import { translate } from 'utils/locale';
import Card from 'components/modules/Card';
import Img from 'components/atoms/Img';

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

const StyledTableColunm = styled(Table.Column)`
  & {
    font-size: 14px;
    border-radius: 5px;
  }
`;

const StyledCardColumn = styled(Card.Column)`
  padding: 0 30px;
`;

const StyledCardRow = styled(Card.Row)`
  padding: 15px;
  box-shadow: 0 5px 30px 0 #dee8ef;
  border-radius: 10px;
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
          <FlexBox
            styles={{
              height: '400px',
              margin: '10px 0',
            }}
          >
            <Card styles={{ width: '100%', margin: '0 50px 0 0' }}>
              <Card.SubTitle>{keywordList[0].category}</Card.SubTitle>
              <Card.Content>
                <FlexBox>
                  <Img
                    src={keywordList[0]?.image}
                    alt="product"
                    width={200}
                    styles={{ border: '1px solid #d2dae0', borderRadius: '5px' }}
                  />
                </FlexBox>
                <FlexBox styles={{ flexDirection: 'column', margin: '0 20px', justifyContent: 'center' }}>
                  <StyledCardRow>
                    <StyledCardColumn label={translate('total_products')}>
                      {keywordList[0]?.totalVolume}
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('search_volume_total')}>
                      {keywordList[0]?.totalCount}
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('keyword_ratio')}>
                      {keywordList[0]?.competition}
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('keyword_competitive_strength')}>
                      {keywordList[0]?.competitiveStrength}
                    </StyledCardColumn>
                  </StyledCardRow>
                  <StyledCardRow>
                    <StyledCardColumn label={translate('avg_price')}>{translate('avg_price')}</StyledCardColumn>
                    <StyledCardColumn label={translate('low_price')}>{translate('low_price')}</StyledCardColumn>
                    <StyledCardColumn label={translate('high_price')}>{translate('high_price')}</StyledCardColumn>
                  </StyledCardRow>
                  <StyledCardRow>
                    <StyledCardColumn label={translate('sale_volume')}>{translate('sale_volume')}</StyledCardColumn>
                    <StyledCardColumn label={translate('sale_price')}>{translate('sale_price')}</StyledCardColumn>
                  </StyledCardRow>
                </FlexBox>
              </Card.Content>
            </Card>
            <Card styles={{ width: '200px', boxShadow: '0 5px 30px 0 #dee8ef', borderRadius: '10px' }}>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderColumn columnWidth="100%">{translate('keyword_shopping')}</Table.HeaderColumn>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {(relativeKeywords || []).map(relativeKeyword => {
                    return (
                      <Table.Row key={v4()}>
                        <StyledTableColunm>{relativeKeyword}</StyledTableColunm>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </Card>
          </FlexBox>
        </FlexBox>
      </KeywordFilterField>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderColumn columnWidth="10%">{translate('keyword')}</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">{translate('search_volume_pc')}</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">{translate('search_volume_mobile')}</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">{translate('search_volume_total')}</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">{translate('total_products')}</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">{translate('keyword_ratio')}</Table.HeaderColumn>
            <Table.HeaderColumn columnWidth="10%">{translate('keyword_competitive_strength')}</Table.HeaderColumn>
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
