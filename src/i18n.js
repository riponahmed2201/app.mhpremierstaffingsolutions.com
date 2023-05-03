import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locals/en/translationEN.json';
import translationAR from './locals/ar/translationAR.json';

//the translation
const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;






// "i18next": "19.6.3",
// "i18next-browser-languagedetector": "5.0.1",
// "i18next-http-backend": "1.0.17",
// "react-i18next": "^12.2.2",