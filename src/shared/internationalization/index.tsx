import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import resources from './resources';

export const buildSentence = (
  sentence: string,
  variables: Array<string>,
): string => {
  let translatedSentence = sentence;
  for (let i = 0; i < variables.length; i++) {
    translatedSentence = translatedSentence.replace('__var__', variables[i]);
  }
  return translatedSentence;
};

i18n.use(initReactI18next).init({
  // compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  // debug: __CONFIG__.ENV === 'dev',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
