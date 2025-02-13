import React from 'react';
import { CardProps } from '../../types.ts/interfaces';

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  return (
    <>
      <div className="ist-item__description-container">
        <div className="list-item__name">{item.name}</div>
      </div>
    </>
  );
};

export default Card;
