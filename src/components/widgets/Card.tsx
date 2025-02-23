import React from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleSelection } from '../../store/slices/selectedItemsSlice';
import { CardProps } from '../../types/interfaces';

import '../../styles/card-list.css';
import '../../styles/variables.css';

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  const thisID = item.url?.split('/').filter(Boolean).pop() || '';
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isSelected = useSelector(
    (state: RootState) => state.selectedCharacters.selected[thisID]
  );

  const handleClick = () => {
    navigate(`/details/${thisID}?page=${searchParams.get('page') || 1}`);
  };

  const handleSelect = () => {
    dispatch(toggleSelection(thisID));
  };

  return (
    <div className='list-item' role='article' onClick={handleClick}>
      <div className='list-item__description-container'>
        <input type='checkbox' checked={isSelected} onChange={handleSelect} />
        <div className='list-item__name'>{item.name}</div>
      </div>
    </div>
  );
};

export default Card;
