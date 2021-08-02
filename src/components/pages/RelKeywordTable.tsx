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
    <Table
      columns={[
        { title: '연관 키워드', key: v4(), width: '10%' },
        { title: 'PC 검색량', key: v4(), width: '10%' },
        { title: 'Mobile 검색량', key: v4(), width: '10%' },
        { title: 'PC 클릭율', key: v4(), width: '10%' },
        { title: 'Moblie 클릭율', key: v4(), width: '10%' },
        { title: '경쟁강도', key: v4(), width: '10%' },
        { title: '평균노출 광고수', key: v4(), width: '10%' },
      ]}
      data={relKeywords.map((keywordItem, keywordItemIdx) => {
        return {
          key: v4(),
          colums: [
            { key: v4(), element: keywordItem.relKeyword },
            { key: v4(), element: keywordItem.monthlyPcQcCnt },
            { key: v4(), element: keywordItem.monthlyMobileQcCnt },
            { key: v4(), element: keywordItem.monthlyAvePcClkCnt },
            { key: v4(), element: keywordItem.monthlyAveMobileClkCnt },
            { key: v4(), element: keywordItem.compIdx },
            { key: v4(), element: keywordItem.plAvgDepth },
          ],
        };
      })}
    />
  );
};

export default RelKeywordTable;
