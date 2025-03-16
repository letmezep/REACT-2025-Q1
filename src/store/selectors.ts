import { RootState } from '../store/store';

export const selectCountries = (state: RootState) =>
  state.createCountriesSlice || [];
