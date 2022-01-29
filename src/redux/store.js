import { configureStore } from '@reduxjs/toolkit';
import candidatesDataReducer from './candidatesDataSlice';

export const store = configureStore({
  reducer: {
    candidatesData: candidatesDataReducer
  }
});
