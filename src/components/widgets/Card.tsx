import React from 'react';
import { Link } from 'react-router';
import { CardProps } from '../../types.ts/interfaces';

import '../../styles/card-list.css';
import '../../styles/variables.css';
// import Details from '../layout/Details';

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  // const handleClick = () => {
  //   return <Details />;
  // };

  return (
    <Link to={`/details/${item.name}`} className="list-item">
      <div className="list-item__name">{item.name}</div>
    </Link>
    // <>
    //    <div className="list-item" onClick={handleClick}>
    //   <div className="list-item">
    //     <div className="list-item__description-container">
    //       <div className="list-item__name">{item.name}</div>
    //     </div>
    //   </div>
    //  </>
  );
};

export default Card;
