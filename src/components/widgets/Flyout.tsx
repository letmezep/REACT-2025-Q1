import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unselectAll } from '../../store/slices/selectedItemsSlice';
import { RootState } from '../../store/store';
import BaseButton from '../ui/BaseButton';

import '../../styles/flyout.css';

const Flyout: React.FC = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedCharacters.selected
  );
  const selectedCount = Object.keys(selectedItems).length;

  if (selectedCount === 0) return null;

  return (
    <div className="flyout">
      <span>{selectedCount} items are selected</span>
      <BaseButton onClick={() => dispatch(unselectAll())}>
        Unselect all
      </BaseButton>
      <BaseButton onClick={() => console.log('Downloading...')}>
        Download
      </BaseButton>
    </div>
  );
};

export default Flyout;
