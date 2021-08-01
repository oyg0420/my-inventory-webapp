import API from 'apis';

type GetKeywordsParams = {
  keyword: string;
};

export type KeywordItem = {
  keyword: string;
  relativeKeywords: string[];
  searchVolumeWithPC: number;
  searchVolumeWithMobile: number;
  totalVolume: number;
  totalCount: number;
  competition: number;
  competitiveStrength: string;
};

export type GetKeywordsResponse = {
  result: {
    keyword: string;
    relativeKeywords: string[];
    searchVolumeWithPC: number;
    searchVolumeWithMobile: number;
    totalVolume: number;
    totalCount: number;
    competition: number;
    competitiveStrength: string;
  };
};

const getKeywords = async (params: GetKeywordsParams) => {
  const res = await API.get<GetKeywordsResponse>('/keywords', {
    params: {
      keyword: params.keyword,
    },
  });

  return res.data;
};

export { getKeywords };
