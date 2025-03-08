import { useDispatch, useSelector } from 'react-redux';
import { toggleSelection } from './store/slices/selectedItemsSlice';
import { CardProps } from './types/interfaces';
import { useRouter } from 'next/router';
import { RootState } from './store/store';

const Card = ({ item }: CardProps) => {
  const dispatch = useDispatch();
  const thisID = item.url?.split('/').filter(Boolean).pop() || '';
  const isSelected = useSelector(
    (state: RootState) => state.selectedCharacters.selected[thisID]
  );
  const router = useRouter();

  const handleClick = () => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, id: thisID },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleSelect = () => {
    dispatch(toggleSelection(thisID));
  };

  return (
    <div className="list-item" role="article" onClick={handleClick}>
      <div className="list-item__description-container">
        <input type="checkbox" checked={isSelected} onChange={handleSelect} />
        <div className="list-item__name">{item.name}</div>
      </div>
    </div>
  );
};

export default Card;
