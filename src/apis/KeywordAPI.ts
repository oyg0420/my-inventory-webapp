import API from 'apis';

type GetKeywordsParams = {
  keyword: string;
};

export type KeywordItem = {
  keyword: string;
  relativeKeywords: string[];
  searchVolumeWithPC: number;
  searchVolumeWithMobile: number;
  totalVolume: number | null;
  totalCount: number;
  competition: number;
  competitiveStrength: string;
  category: string;
  price: string[];
  etc: string[];
  image: string;
};

export type GetKeywordsResponse = {
  result: {
    keyword: string;
    relativeKeywords: string[];
    searchVolumeWithPC: number;
    searchVolumeWithMobile: number;
    totalVolume: number | null;
    totalCount: number;
    competition: number;
    competitiveStrength: string;
    category: string;
    price: string[];
    etc: string[];
    image: string;
  };
};

const getKeywords = async (params: GetKeywordsParams) => {
  const res = await API.get<GetKeywordsResponse>('/keywords/keywordtools', {
    params: {
      keyword: params.keyword,
    },
  });

  return res.data;
};

export { getKeywords };
