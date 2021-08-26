import { KeywordItem } from 'apis/RelKeywordAPI';
import Table from 'components/modules/Table';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { v4 } from 'uuid';

type Props = {
  keywordList: KeywordItem[];
};

const RelKeywordTable: React.FC<Props> = ({ keywordList }) => {
  const [relKeywords, setRelKeywords] = useState<KeywordItem[]>([]);

  useEffect(() => {
    setRelKeywords(keywordList);
  }, [keywordList]);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderColumn columnWidth="10%">연관 키워드</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">PC 검색량</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">Mobile 검색량</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">PC 클릭율</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">Moblie 클릭율</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">경쟁강도</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">평균노출 광고수</Table.HeaderColumn>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {relKeywords.map(keywordItem => {
          return (
            <Table.Row key={v4()}>
              <Table.Column>{keywordItem.relKeyword}</Table.Column>
              <Table.Column>{keywordItem.monthlyPcQcCnt}</Table.Column>
              <Table.Column>{keywordItem.monthlyMobileQcCnt}</Table.Column>
              <Table.Column>{keywordItem.monthlyAvePcClkCnt}</Table.Column>
              <Table.Column>{keywordItem.monthlyAveMobileClkCnt}</Table.Column>
              <Table.Column>{keywordItem.compIdx}</Table.Column>
              <Table.Column>{keywordItem.plAvgDepth}</Table.Column>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default RelKeywordTable;
