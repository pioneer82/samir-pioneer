import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageReducer';

const store = configureStore({
    reducer: {
        language: languageReducer,
    },
});

export default store;