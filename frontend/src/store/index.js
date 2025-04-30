import { configureStore } from '@reduxjs/toolkit';
import ratesReducer from './slices/ratesSlice';

export const store = configureStore({
  reducer: {
    rates: ratesReducer,
  },
});

export default store; 