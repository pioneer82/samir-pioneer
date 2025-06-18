import { LANGUAGECHANGE } from './ActionTypes';

export const languageChange = (currentLanguage) => ({
  type: LANGUAGECHANGE,
  payload: currentLanguage ,
});