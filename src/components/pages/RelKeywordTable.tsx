import { KeywordItem } from 'apis/RelKeywordAPI';
import Table from 'components/modules/Table';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { translate } from 'utils/locale';
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
          <Table.HeaderColumn columnWidth="10%">{translate('keyword_relative')}</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">{translate('search_volume_pc')}</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">{translate('search_volume_mobile')}</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">{translate('click_volume_pc')}</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">{translate('click_volume_mobile')}</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">{translate('keyword_competitive_strength')}</Table.HeaderColumn>
          <Table.HeaderColumn columnWidth="10%">{translate('number_avg_ads')}</Table.HeaderColumn>
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
