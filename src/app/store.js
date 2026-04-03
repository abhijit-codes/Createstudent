// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userDetail from '../features/userdetailsSlice';

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
