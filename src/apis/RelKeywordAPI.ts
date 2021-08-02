import API from 'apis';

type GetRelKeywordsParams = {
  keyword: string;
};

export type KeywordItem = {
  relKeyword: string;
  monthlyPcQcCnt: number;
  monthlyMobileQcCnt: number;
  monthlyAvePcClkCnt: number;
  monthlyAveMobileClkCnt: number;
  monthlyAvePcCtr: number;
  monthlyAveMobileCtr: number;
  plAvgDepth: number;
  compIdx: string;
};

export type GetRelKeywordsResponse = {
  result: KeywordItem[];
};

const getRelKeywords = async (params: GetRelKeywordsParams) => {
  const res = await API.get<GetRelKeywordsResponse>('/relKeywords/keywordtools', {
    params: {
      keyword: params.keyword,
    },
  });

  return res.data;
};

export { getRelKeywords };
