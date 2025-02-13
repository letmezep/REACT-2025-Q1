import React from 'react';
import { CardProps } from '../../types.ts/interfaces';

import '../../styles/card-list.css';
import '../../styles/variables.css';

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  return (
    <>
      <div className="list-item">
        <div className="list-item__description-container">
          <div className="list-item__name">{item.name}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
