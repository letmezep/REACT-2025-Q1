import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [
  'Poland',
  'France',
  'Germany',
  'Spain',
  'Portugal',
  'Albania',
  'Estonia',
  'Russia',
  'Australia',
  'Finland',
  'Canada',
];

const countriesSlice = createSlice({
  name: 'counties',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<string[]>) => {
      return action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
