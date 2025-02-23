import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCharactersQuery } from '../../services/api/starWarsApi';
import { RootState } from '../../store/store';
import { unselectAll } from '../../store/slices/selectedItemsSlice';
import { exportToCSV } from '../../utils/exportToCSV';
import BaseButton from '../ui/BaseButton';
import '../../styles/flyout.css';

const Flyout: React.FC = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedCharacters.selected
  );
  const selectedIds = Object.keys(selectedItems).filter(
    (id) => selectedItems[id]
  );

  const { data } = useGetCharactersQuery({});

  const selectedList =
    data?.results.filter((item) => {
      const id = item.url.split('/').filter(Boolean).pop();
      return selectedIds.includes(id || '');
    }) || [];

  if (selectedList.length === 0) return null;

  return (
    <div className="flyout">
      <span>{selectedList.length} items are selected</span>
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
