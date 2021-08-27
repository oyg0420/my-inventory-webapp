import React, { useCallback } from 'react';
import Table from 'components/modules/Table';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKeywords } from 'modules/keyword';
import selectKeyword from 'modules/keyword/selector';
import FlexBox from 'components/atoms/FlexBox';
import SearchInput from 'components/modules/SearchInput';
import { translate } from 'utils/locale';
import Card from 'components/modules/Card';
import Img from 'components/atoms/Img';

const COMPETITIVE_STRENGTH: { [x: string]: string } = { 높음: 'high', 낮음: 'low', 중간: 'middle' };

const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 30px;
`;

const StyledCardRow = styled(Card.Row)`
  padding: 15px;
  box-shadow: 0 5px 30px 0 #dee8ef;
  border-radius: 10px;
  height: 100%;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;

  ${StyledCardRow}:first-child {
    margin-bottom: 10px;
  }

  ${StyledCardRow} + ${StyledCardRow} {
    margin-bottom: 10px;
  }

  ${StyledCardRow}:last-child {
    margin-bottom: 0px;
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

  b {
    color: #333;
  }

  b.high {
    color: #dc3545;
  }

  b.middle {
    color: #198754;
  }

  b.low {
    color: #0d6efd;
  }

  span.count {
    font-size: 12px;
    margin-left: 5px;
  }
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

  return (
    <KeywordContainer>
      <SearchInput originKeyword={keyword} onEnterKeyPress={handleKeypress} />
      <SectionContainer>
        <FlexBox styles={{ flexDirection: 'column', margin: '10px 0 20px 0', flex: 1 }}>
          <FlexBox
            styles={{
              height: '400px',
              margin: '10px 0',
            }}
          >
            <Card styles={{ width: '100%' }}>
              <Card.SubTitle>{keywordList[0].category}</Card.SubTitle>
              <Card.Content>
                <FlexBox>
                  <Img
                    src={keywordList[0]?.image}
                    alt="product"
                    width={250}
                    styles={{ border: '1px solid #d2dae0', borderRadius: '5px', margin: '0 20px 0 0' }}
                  />
                </FlexBox>
                <FlexBox styles={{ flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                  <StyledCardRow>
                    <StyledCardColumn label={translate('total_products')}>
                      <b>{keywordList[0]?.totalVolume}</b>
                      <span className="count">{translate('count_product')}</span>
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('search_volume_total')}>
                      <b>{keywordList[0]?.totalCount}</b>
                      <span className="count">{translate('count_search')}</span>
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('keyword_ratio')}>
                      <b>{keywordList[0]?.competition}</b>
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('keyword_competitive_strength')}>
                      <b className={COMPETITIVE_STRENGTH[keywordList[0]?.competitiveStrength]}>
                        {keywordList[0]?.competitiveStrength}
                      </b>
                    </StyledCardColumn>
                  </StyledCardRow>
                  <StyledCardRow>
                    <StyledCardColumn label={translate('avg_price')}>
                      <b>{keywordList[0]?.avgPrice}</b>
                      <span className="count">{translate('korean_currency')}</span>
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('low_price')}>
                      <b>{keywordList[0]?.lowPrice}</b>
                      <span className="count">{translate('korean_currency')}</span>
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('high_price')}>
                      <b>{keywordList[0]?.highPrice}</b>
                      <span className="count">{translate('korean_currency')}</span>
                    </StyledCardColumn>
                  </StyledCardRow>
                  <StyledCardRow>
                    <StyledCardColumn label={translate('sale_volume')}>{translate('sale_volume')}</StyledCardColumn>
                    <StyledCardColumn label={translate('sale_price')}>{translate('sale_price')}</StyledCardColumn>
                  </StyledCardRow>
                </FlexBox>
              </Card.Content>
            </Card>
            <Card styles={{ width: '20%' }}>
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
      </SectionContainer>
    </KeywordContainer>
  );
};

export default Keywords;
