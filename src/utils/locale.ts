import i18n from 'i18next';

const translate = (key: string, option?: any) => {
  return i18n.t(key, option);
};

export { translate };
