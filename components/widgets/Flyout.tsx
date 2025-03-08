import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCharactersQuery } from '../api/starWarsApi';
import { RootState } from '../store/store';
import { unselectAll } from '../store/slices/selectedItemsSlice';
import { exportToCSV } from '../utils/exportToCSV';
import BaseButton from '../ui/BaseButton';

const Flyout: React.FC = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedCharacters.selected
  );
  const selectedCount = Object.values(selectedItems).filter(Boolean).length;

  const { data } = useGetCharactersQuery({});

  const selectedList =
    data?.results.filter((item) => {
      const id = item.url.split('/').filter(Boolean).pop() || '';
      return Boolean(id) && selectedItems[id];
    }) || [];

  if (selectedCount === 0) return null;

  return (
    <div className="flyout">
      <div>{selectedCount} items are selected</div>
      <div className="flyout__button-box">
        <BaseButton onClick={() => dispatch(unselectAll())}>
          Unselect all
        </BaseButton>
        <BaseButton onClick={() => exportToCSV(selectedList)}>
          Download
        </BaseButton>
      </div>
    </div>
  );
};

export default Flyout;
