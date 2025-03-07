import { useDispatch, useSelector } from 'react-redux';
import { toggleSelection } from './store/slices/selectedItemsSlice';
import { CardProps } from 'components/types/interfaces';
import { useRouter } from 'next/router';
import { RootState } from '../components/store/store';

const Card = ({ item }: CardProps) => {
  // const thisID = item.url?.split('/').filter(Boolean).pop() || '';
  // const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
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


// function dispatch(arg0: any) {
//   throw new Error('Function not implemented.');
// }
// function dispatch(arg0: {
//   payload: string;
//   type: 'selectedCharacters/toggleSelection';
// }) {
//   throw new Error('Function not implemented.');
// }

// import React from 'react';
// import { useNavigate, useSearchParams } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
// import { toggleSelection } from '../../store/slices/selectedItemsSlice';
// import { CardProps } from '../../types/interfaces';

// import '../../styles/card-list.css';
// import '../../styles/variables.css';

// const Card: React.FC<CardProps> = ({ item }: CardProps) => {
//   const thisID = item.url?.split('/').filter(Boolean).pop() || '';
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const dispatch = useDispatch();
//   const isSelected = useSelector(
//     (state: RootState) => state.selectedCharacters.selected[thisID]
//   );

//   const handleClick = () => {
//     navigate(`/details/${thisID}?page=${searchParams.get('page') || 1}`);
//   };

//   const handleSelect = () => {
//     dispatch(toggleSelection(thisID));
//   };

//   return (
//     <div className="list-item" role="article" onClick={handleClick}>
//       <div className="list-item__description-container">
//         <input type="checkbox" checked={isSelected} onChange={handleSelect} />
//         <div className="list-item__name">{item.name}</div>
//       </div>
//     </div>
//   );
// };

// export default Card;
