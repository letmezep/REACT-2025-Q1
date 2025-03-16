import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormState, CollectionForm } from '../../types/interfaces';

const initialState: CollectionForm = {
  forms: [],
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    submitForm: (state, action: PayloadAction<FormState>) => {
      state.forms.push(action.payload);
    },
  },
});

export default formSlice.reducer;
export const { submitForm } = formSlice.actions;
