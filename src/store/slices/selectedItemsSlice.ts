import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../types/interfaces';

interface SelectedItemsState {
  selectedItems: Record<string, Character>;
}

const initialState: SelectedItemsState = {
  selectedItems: {},
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    toggleItemSelection: (state, action: PayloadAction<Character>) => {
      const { url } = action.payload;
      if (state.selectedItems[url]) {
        delete state.selectedItems[url];
      } else {
        state.selectedItems[url] = action.payload;
      }
    },
  },
});

export const { toggleItemSelection } = selectedItemsSlice.actions;
// export const selectSelectedItems = (state: RootState) =>
//   state.selectedItems.selectedItems;
export default selectedItemsSlice.reducer;
