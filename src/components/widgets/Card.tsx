import React from 'react';
import { Link } from 'react-router';
import { CardProps } from '../../types.ts/interfaces';

import '../../styles/card-list.css';
import '../../styles/variables.css';

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  const thisID = item.url.split('/').filter(Boolean).pop();

  return (
    <Link to={`/details/${thisID}`} className="list-item">
      <div className="list-item__description-container">
        <div className="list-item__name">{item.name}</div>
      </div>
    </Link>
  );
};

export default Card;
