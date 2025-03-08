import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedCharactersState {
  selected: Record<string, boolean>;
}

const initialState: SelectedCharactersState = {
  selected: {},
};

const selectedCharactersSlice = createSlice({
  name: 'selectedCharacters',
  initialState,
  reducers: {
    toggleSelection: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.selected[id] = !state.selected[id];
    },
    unselectAll: (state) => {
      state.selected = {};
    },
  },
});

export const { toggleSelection, unselectAll } = selectedCharactersSlice.actions;
export default selectedCharactersSlice.reducer;
export type { SelectedCharactersState };
