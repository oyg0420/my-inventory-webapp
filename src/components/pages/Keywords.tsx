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
import { H1, H2 } from 'components/atoms/Heading';
import Span from 'components/atoms/Span';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

const COMPETITIVE_STRENGTH: { [x: string]: string } = { 높음: 'high', 낮음: 'low', 중간: 'middle' };

const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 30px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;

  ${Card}:first-child {
    margin-bottom: 25px;
  }

  ${Card} + ${Card} {
    margin-bottom: 25px;
  }

  ${Card}:last-child {
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

const ProductSection = styled(FlexBox)`
  padding: 20px;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ProductContent = styled(FlexBox)``;

const ProductDetail = styled(FlexBox)`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 10px;
`;

const Keywords: React.FC = () => {
  const keywordList = useSelector(selectKeyword.list);
  const relativeKeywords = useSelector(selectKeyword.relativeKeywords);
  const keyword = useSelector(selectKeyword.keyword);
  const dispatch = useDispatch();

  const data: ChartData = {
    labels: ['Total', 'PC', 'Mobile'],
    datasets: [
      {
        categoryPercentage: 0.5,
        barPercentage: 0.5,
        barThickness: 50,
        data: [keywordList[0]?.totalVolume, keywordList[0]?.searchVolumeWithPC, keywordList[0]?.searchVolumeWithMobile],
        backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
        label: '',
      },
    ],
  };

  const options: ChartOptions = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 11,
      },
    },
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          borderDash: [3, 3],
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const handleKeypress = useCallback(
    (nextKeyword: string) => {
      dispatch(fetchKeywords({ keyword: nextKeyword }));
    },
    [dispatch]
  );

  return (
    <KeywordContainer>
      <FlexBox styles={{ padding: '0 20px 20px 20px', flexDirection: 'column' }}>
        <SearchInput originKeyword={keyword} onEnterKeyPress={handleKeypress} />
      </FlexBox>
      {keywordList[0] && (
        <SectionContainer>
          <ProductSection>
            <Span styles={{ fontSize: '14px' }}>{translate('category')}</Span>
            <H2>{keywordList[0].category}</H2>
            <ProductContent>
              <FlexBox styles={{ alignItems: 'center' }}>
                <Img
                  src={keywordList[0].image}
                  alt="product"
                  width={200}
                  height={200}
                  styles={{ borderRadius: '20%', margin: '0 20px 0 0', boxShadow: '0 5px 15px 0 #dee8ef' }}
                />
              </FlexBox>
              <ProductDetail>
                <Card>
                  <Card.Row>
                    <StyledCardColumn label={translate('total_products')}>
                      <b>{keywordList[0].totalVolume}</b>
                      <span className="count">{translate('count_product')}</span>
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('search_volume_total')}>
                      <b>{keywordList[0].totalCount}</b>
                      <span className="count">{translate('count_search')}</span>
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('keyword_ratio')}>
                      <b>{keywordList[0].competition}</b>
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('keyword_competitive_strength')}>
                      <b className={COMPETITIVE_STRENGTH[keywordList[0].competitiveStrength]}>
                        {keywordList[0].competitiveStrength}
                      </b>
                    </StyledCardColumn>
                  </Card.Row>
                </Card>
                <Card>
                  <Card.Row>
                    <StyledCardColumn label={translate('avg_price')}>
                      <b>{keywordList[0].avgPrice}</b>
                      <span className="count">{translate('korean_currency')}</span>
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('low_price')}>
                      <b>{keywordList[0].lowPrice}</b>
                      <span className="count">{translate('korean_currency')}</span>
                    </StyledCardColumn>
                    <StyledCardColumn label={translate('high_price')}>
                      <b>{keywordList[0].highPrice}</b>
                      <span className="count">{translate('korean_currency')}</span>
                    </StyledCardColumn>
                  </Card.Row>
                </Card>
                <Card>
                  <Card.Row>
                    <StyledCardColumn label={translate('sale_volume')}>{translate('sale_volume')}</StyledCardColumn>
                    <StyledCardColumn label={translate('sale_price')}>{translate('sale_price')}</StyledCardColumn>
                  </Card.Row>
                </Card>
              </ProductDetail>
            </ProductContent>
          </ProductSection>
          <ProductSection>
            <H1>{translate('search_volume')}</H1>
            <ProductContent>
              <Card>
                <Bar width={300} height={200} data={data} options={options} />
              </Card>
            </ProductContent>
          </ProductSection>
          <ProductSection>
            <H1>{translate('keyword_shopping')}</H1>
            <ProductContent styles={{ height: '400px' }}>
              <Card styles={{ width: '200px' }}>
                <Table>
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
            </ProductContent>
          </ProductSection>
        </SectionContainer>
      )}
    </KeywordContainer>
  );
};

export default Keywords;
