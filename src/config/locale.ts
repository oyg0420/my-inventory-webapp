import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from 'locale/ko.json';
import en from 'locale/en.json';

const initLocale = () => {
  return i18n.use(initReactI18next).init({
    resources: {
      ko: {
        translation: ko,
      },
      en: {
        translation: en,
      },
    },
    lng: 'ko',
  });
};

export { initLocale };
