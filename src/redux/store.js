import { configureStore } from '@reduxjs/toolkit';
import requestReducer from './slices/requestSlice';

export const store = configureStore({
  reducer: {
    request: requestReducer,
  },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})