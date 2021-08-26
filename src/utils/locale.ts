import i18n from 'i18next';

const translate = (key: string) => {
  return i18n.t(key);
};

export { translate };
