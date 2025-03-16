import { configureStore } from '@reduxjs/toolkit';
import formSliceReducer from './slices/formSlice';
import countriesReducer from './slices/countriesSlices';

export const store = configureStore({
  reducer: {
    createFormSlice: formSliceReducer,
    createCountriesSlice: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
